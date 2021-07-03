import { isNonNullChain } from "typescript";
import File from "./File";

export default interface Modal {
    open: boolean
    file: File | null
    handleClose: () => void
}