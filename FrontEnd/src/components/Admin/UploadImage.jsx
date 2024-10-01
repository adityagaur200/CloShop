import React, { useState } from 'react';

export default function UploadImage() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Handle file selection and convert it to an array for easy manipulation
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    setSelectedFiles(files);
  };

  return (
    <div style={styles.container}>
      {/* Upload Button */}
      <label style={styles.uploadButton}>
        Upload files
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          accept="image/*"
          style={styles.input}
        />
      </label>

      {/* Image Preview Section */}
      {selectedFiles.length > 0 && (
        <div style={styles.previewContainer}>
          {selectedFiles.map((file, index) => (
            <div key={index} style={styles.imageWrapper}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={styles.imagePreview}
              />
              <p style={styles.imageName}>{file.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Basic CSS styles for layout and design
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#6200ea',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  input: {
    display: 'none', // Hide the actual input
  },
  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageWrapper: {
    margin: '10px',
    textAlign: 'center',
  },
  imagePreview: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  imageName: {
    marginTop: '5px',
    fontSize: '12px',
    color: '#333',
  },
};
