import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import mongoose from "mongoose";
const promisedDb = mongoose
  .connect(
    "mongodb+srv://phonbook-fso:magneto@cluster0.7lhia.mongodb.net/BLOG?retryWrites=true&w=majority"
  )
  .then((instance) => instance.connection.db);

const storage = new GridFsStorage({
  db: promisedDb,
  options: {
    useUnifiedTopology: true,
    useUrlParser: true,
  },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.memetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
