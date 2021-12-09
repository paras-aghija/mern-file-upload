import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = `mongodb+srv://phonbook-fso:magneto@cluster0.7lhia.mongodb.net/BLOG?retryWrites=true&w=majority`;
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Error connecting to mongodb", error);
  }
};

export default Connection;
