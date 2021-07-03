import { Card, CardHeader } from "@material-ui/core";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import File from "../../models/File";

const PdfPreview = ({ file }: { file: File}) => {
    return <Card className='card-container'>
        <CardHeader
            avatar={<PictureAsPdfIcon style={{ fontSize: '4rem' }} />}
            title={<>{file.name}  <span className='size'>{file.size.toLocaleString()}kB</span></>}
            // @ts-ignore
            subheader={file.pages > 1 ? `${file.pages}  pages` : '1 page'}
            titleTypographyProps={{ variant: 'h5', className: 'title-container' }}
            subheaderTypographyProps={{ variant: 'h6', color: 'textPrimary' }}
        />
    </Card>
}

export default PdfPreview;