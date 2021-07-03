import { Card, CardHeader } from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';

const InvalidFileType = (): JSX.Element => {
    return <Card className='card-container'>
    <CardHeader
        avatar={<ErrorIcon style={{ fontSize: '4rem' }} />}
        title="Invalid file type"
        titleTypographyProps={{ variant: 'h5', className: 'title-container' }}
    />
</Card>
}

export default InvalidFileType;