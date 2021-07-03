import { DialogContent } from "@material-ui/core";
import { Dialog, DialogTitle } from "@material-ui/core";
import ModalModel from "../models/ModalModel";
import utils from "../services/utils";
import DynamicPlayer from "./dynamicCmps/DynamicPlayer";

const Modal = ({ open, file, handleClose }: ModalModel): JSX.Element => {
    const fileUrl = 'https://mighty-sierra-05836.herokuapp.com/' + file?.name;
    const fileType = utils.getFileType(file);

    return <Dialog open={open} onClose={handleClose} fullWidth={true} className="modal-container" aria-labelledby="customized-dialog-title">
        <DialogTitle id="customized-dialog-title" className="title">{file?.name}</DialogTitle>
        <DialogContent dividers className="modal-content">
            <DynamicPlayer url={fileUrl} type={fileType} />
        </DialogContent>
    </Dialog>
}



export default Modal;