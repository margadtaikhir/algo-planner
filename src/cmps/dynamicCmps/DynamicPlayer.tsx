import { Typography } from "@material-ui/core";

const DynamicPlayer = ({ url, type }: { url: string, type: String }) => {
    switch (type) {
        case 'image': return <img src={url} alt="file" />;
        case 'video': return <video src={url} autoPlay={true} controls={true}/>;
        case 'pdf': return <embed src={url} type="application/pdf" />
        default: return <Typography variant="h5">Not supported file.</Typography>
    }
}

export default DynamicPlayer;