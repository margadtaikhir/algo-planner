import { useState, useEffect } from 'react';
import File from './models/File';
import appService from './services/appService';
import './styles/global.scss';
import FileList from './cmps/FileList';
import Modal from './cmps/Modal';
import { Container, LinearProgress } from '@material-ui/core';

function App(): JSX.Element {
  const [files, setFiles] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const fetchedFiles = await appService.getFiles();
      if (fetchedFiles) {
        setFiles(fetchedFiles);
        setIsLoading(false);
      }
    })();
  }, []);

  const handleClickOpen = (file: File): void => {
    setSelectedFile(file);
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Container maxWidth="sm" className="main-container">
        {isLoading ? <LinearProgress /> :
          <><FileList files={files} handleClickOpen={handleClickOpen} />
            <Modal open={isOpen} file={selectedFile} handleClose={handleClose} /></>
        }
      </Container>
    </>
  );
}

export default App;
