const { bucket } = require('../config/db')
const debugBucket = require('debug')('app:bucket')
const uuid = require('uuid')
const js = require('fs')


module.exports = {
    async storageBucketUpload(filename){
        // generate random uuid for storage
        debugBucket(`Firestore Filename ${filename}`)
        const storageToken = uuid.v4();

        // declare file path & options params for bucket upload
        const serverFilePath = `./public/uploads/${filename}`;
        const options = {
            destination: filename,
            resumable: true,
            validation: 'crc32',
            metadata: {
                metadata: {
                    firestoreStorageDownloadToken: storageToken
                },
            }
        }

        // Cloud firstore upload call
        const result = await bucket.upload(serverFilePath, options)
        const bucketName = result[0].metadata.bucket;
        debugBucket(`Bucket Name: ${bucketName}`);

        // Retrieve a link to the file / build download URL
        const downloadURL = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filename}?alt=media&token=${storageToken}`;
        console.log(`File succesffuly uploaded: ${downloadURL}`);

        // Delete the temo file
        fstat.unlink(serverFilePath, error => {
            if(error){
                debugBucket(error)
                return({
                    message: 'Error occured when removing file from temp storage'
                })
            } else {
                debugBucket('File in temo local storage deleted')
            }
        })

        return downloadURL
    }
}