const { bucket } = require('../config/db')
const debugBucket = require('debug')('app:bucket')
const uuid = require('uuid')
const fs = require('fs')


module.exports = {
    async storageBucketUpload(filename){
        // GEN RANDOM UUID STORAGE TOKEN
        debugBucket(`Firestore Filename: ${filename}`)
        const storageToken = uuid.v4();

        // DECLARE FILEPATH & OPTIONS PARAMS FOR BUCKET UPLOAD
        const serverFilePath = `./public/uploads/${filename}`;
        const options = {
            destination: filename,
            resumeable: true,
            validation: 'crc32c',
            metadata: {
                metadata: {
                    firebaseStorageDownloadTokens: storageToken
                },
            }
        }

        // CLOUD FIRESTORE UPLOAD CALL
        const result = await bucket.upload(serverFilePath, options)
        const bucketName = result[0].metadata.bucket;
        debugBucket(`Bucket Name: ${bucketName}`);

        // CONSTRUCT DL URL
        const downloadURL = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filename}?alt=media&token=${storageToken}`;
        console.log(`File succesffuly uploaded: ${downloadURL}`)

        // DELETE TEMP FILE (can cause issues)
        fs.unlink(serverFilePath, error => {
            if(error){
                debugBucket(error);
                return({
                    message: 'Error occured in removing file from temporary local storage'
                })
            } else {
                debugBucket('File in temporary local storage: DELETED')
            }
        })

        return downloadURL;
    },

    // Delete fromstorage
    async deleteFileFromBucket(uploadedFile){
        const file = bucket.file(uploadedFile);
        // Check if it exists
        const fileChecker = await file.exists()

        // 400 error - cant find a file
        if(fileChecker[0] === false){
            // TOGGLE: if it doesnt find the image, ignore it - dont break the app = True is ignore missing files
            const options = {
                ignoreNotFound: true,
            };

            // Pass options through
            const data = await file.delete(options)
            debugBucket(`The ${uploadedFile} does not exist in storage - check server for bad data handling`);
            return data[0];

            // File exists
        } else {
            const data = await file.delete();
            debugBucket( `File deleted from storage: ${uploadedFile}`)
            return data[0]
        }
    }
}