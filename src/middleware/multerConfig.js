const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Log the destination path
    console.log('Destination:', 'uploads/'); // Add this line
    cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    // Log the original filename
    console.log('Original Filename:', file.originalname); // Add this line
    cb(null, file.originalname); // Use the original file name as the uploaded file name
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10000000, // 10MB
    files: 10, // 10 files
    totalSize: 100000000, // 100MB
  },
  fileFilter: function (req, file, cb) {
    // Define the accepted MIME types for PDF, Word, and other types
    const acceptedMimeTypes = [
      'application/pdf',         // PDF files
      'application/msword',      // Word (.doc) files
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Word (.docx) files
      // Add more MIME types for other file types here
    ];
  
    // Check if the uploaded file's MIME type is in the acceptedMimeTypes array
    if (acceptedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // Accept the file
    } else {
      cb(null, false); // Reject the file
    }
  }
  ,
});

module.exports = upload;
