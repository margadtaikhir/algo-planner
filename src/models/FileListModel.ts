import File from "./File";

export default interface FileList{
    files: File[]
    handleClickOpen: (file: File) => void
}