import { useState } from 'react';
import FileUpload from 'react-material-file-upload';

const DragDrop = (props) => {

    const [files, setFiles] = useState([]);

    const handleFileUpload = (uploadedFiles) => {
        setFiles(uploadedFiles);
        if (uploadedFiles.length > 0) {
          const imageDataURL = URL.createObjectURL(uploadedFiles[0]);
          const imageData = uploadedFiles[0]
          props.onImageUpload(imageDataURL, imageData);
        }
    };
    
    return (
      <FileUpload value={files} onChange={handleFileUpload } accept=".jpg,.png,.jpeg" buttonText="Upload Image" maxFiles={1} buttonProps="color: 'yellow'" inputProps={{ type: 'file' }} />
    )
}

export default DragDrop