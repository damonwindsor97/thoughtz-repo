export function getFileFromUrl(downloadUrl){
    // Remove front of URL string
    const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${import.meta.env.VITE_STORAGE_BUCKET_URL}/o/`;
    let fileGlob = downloadUrl.replace(baseUrl, "")

    // Remove the End of the URL string
    const indexOfEndPath = fileGlob.indexOf("?");
    fileGlob = fileGlob.substring(0, indexOfEndPath);


    return fileGlob;
}