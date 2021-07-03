import { Card, CardHeader } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import File from "../../models/File";

const ImagePreview = ({ file }: { file: File}) => {
    return <Card className='card-container'>
        <CardHeader
            avatar={<ImageIcon style={{ fontSize: '4rem' }} />}
            title={<>{file.name}  <span className='size'>{file.size.toLocaleString()}kB</span></>}
            subheader={`${file.width}x${file.height}px`}
            titleTypographyProps={{ variant: 'h5', className: 'title-container' }}
            subheaderTypographyProps={{ variant: 'h6', color: 'textPrimary' }}
        />
    </Card>
}

export default ImagePreview;