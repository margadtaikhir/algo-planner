import File from '../models/File';
import utils from '../services/utils';
import InvalidFileType from './dynamicCmps/InvalidFileType';
import ImagePreview from './dynamicCmps/ImagePreview';
import VideoPreview from './dynamicCmps/VideoPreview';
import PdfPreview from './dynamicCmps/PdfPreview';

const DynamicPreview = ({ file, handleClickOpen }: { file: File, handleClickOpen: (file: File) => void }): JSX.Element => {
    const fileType = utils.getFileType(file);

    const handleClick = () => {
        handleClickOpen(file);
    }

    const getComponent = (file: File) => {
        switch (fileType) {
            case 'video': return <VideoPreview file={file} />;
            case 'image': return <ImagePreview file={file} />;
            case 'pdf': return <PdfPreview file={file} />;
            default: return <InvalidFileType />;
        }
    }

    return <div onClick={handleClick}>
        {getComponent(file)}
    </div>
}

export default DynamicPreview;