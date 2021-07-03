import Files from '../models/File';

const getFiles = async (): Promise<Files[] | null> => {
    const url = 'https://mighty-sierra-05836.herokuapp.com/files';

    try {
        const res = await fetch(url);
        const {files} = await res.json();
        
        return files;
    } catch (e) {
        console.log(`Error, failed to get files. ${e}`);
    }
    return null;
}



const appService = {
    getFiles
}

export default appService;