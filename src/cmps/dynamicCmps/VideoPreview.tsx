import { Card, CardHeader } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import File from "../../models/File";

const VideoPreview = ({ file }: { file: File}) => {
    return <Card className='card-container'>
        <CardHeader
            avatar={<VideocamIcon style={{ fontSize: '4rem' }} />}
            title={<>{file.name}  <span className='size'>{file.size.toLocaleString()}kB</span></>}
            subheader={`${file.length} seconds`}
            titleTypographyProps={{ variant: 'h5', className: 'title-container' }}
            subheaderTypographyProps={{ variant: 'h6', color: 'textPrimary' }}
        />
    </Card>
}

export default VideoPreview;