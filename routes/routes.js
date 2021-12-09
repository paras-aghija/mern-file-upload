import express from "express";

import {
  createPosts,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controller/post-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/create", createPosts);
router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);

export default router;
