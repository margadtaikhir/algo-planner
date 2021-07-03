import FileListModel from "../models/FileListModel";
import DynamicPreview from "./DynamicPreview";


 const FileList = ({files, handleClickOpen}: FileListModel) : JSX.Element => {

    return <ul className="files-container">
        {files.map(file => {
            return <DynamicPreview file={file} key={file.name} handleClickOpen={handleClickOpen}/>
        })}
    </ul>
}

export default FileList;