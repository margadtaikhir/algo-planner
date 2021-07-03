import File from '../models/File';

const getFileType = (file: File | null): String => {
    switch (file?.mime) {
        case 'video/mp4': return 'video';
        case 'image/jpeg': return 'image';
        case 'application/pdf': return 'pdf';
        default: return '';
    }
}



const utils = {
    getFileType
}

export default utils;