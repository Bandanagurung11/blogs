import express from "express";
// extracting express module form express package;
import mongoose from "mongoose";
//helps interact with database
import cors from "cors";
// middleware, cross origin resources sharing, allow only specified domain request to pass to the database
import "dotenv/config";

const app = express();
// assigning express to the app so the app is server here
app.use(express.json());
// data get and send in object format only
app.use(cors());

try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("database connected successfully");
} catch (error) {
  console.log("something went wrong while connecting to the database", error);
}

// ? vanda agadhi chai database ko name
app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: { type: String, required: true },
});
//defining user table fields

const User = mongoose.model("users", userSchema);
// crreating user table using model method

// user routes (CRUD)--> create read update delete

app.post("/users", async (req, res) => {
  try {
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      // console.log("this user eamail already exist")
      return res
        .status(409)
        .json({ message: `user already exist with this ${req.body.email}` });
    }
    const newUser = await User(req.body).save();
    console.log(newUser, "this is new user");
    return res
      .status(201)
      .json({ message: "user created sucessfully", user: newUser });
  } catch (error) {
    console.log("something went wrong", error);
    return res.status(500).json({ message: "internal server, error" });
  }
});

//read all users
app.get("/users", async (req, res) => {
  try {
    const fetchUsers = await User.find();
    return res
      .status(200)
      .json({ message: "all user fetched sucessfully", users: fetchUsers });
  } catch (error) {
    console.log("something went wrong", error);
    return res.status(500).json({ message: "internal server errror" });
  }
});

//read single users
app.get("/users/:id", async (req, res) => {
  try {
    const fetchuser = await User.findById(req.params.id);
    return res
      .status(200)
      .json({ message: " user fetch sucessfully", user: fetchuser });
  } catch (error) {
    console.log("something went wrong", error);
    return res.status(500).json({ message: "internal server errror" });
  }
});

//update a user
app.patch("/users/:id", async (req, res) => {
  try {
    const userExist = await User.findById(req.params.id);
    if (!userExist) {
      return res.status(404).json({ message: "user not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "user updated successfully", user: updatedUser });
  } catch (error) {
    console.log("somethig went wrong", error);
    return res.status(500).json({ message: "server internal error" });
  }
});

// delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "user not found" });
    }
    return res
      .status(200)
      .json({ message: "user deleted succesfully", user: deletedUser });
  } catch (error) {
    console.log("something went wrong", error);
    return res.status(500).json({ message: "internal server error" });
  }
});

//for articles
const articleSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  thumnail: { type: String },
});

const ArticleTable = mongoose.model("article", articleSchema);

app.post("/articles", async (req, res) => {
  try {
    const createarticle = await ArticleTable(req.body).save();
    return res
      .status(200)
      .json({
        message: "articles created sucessfully",
        articles: createarticle,
      });
  } catch (error) {
    console.log("something went wrong", error);
    return res.status(201).json({ message: "couldn't create a user" });
  }
});

app.get("/articles", async (req, res) => {
  try {
    const fetchArticles = await ArticleTable.find();
    return res
      .status(200)
      .json({
        message: "all articles fetch sucessfully",
        articles: fetchArticles,
      });
  } catch (error) {
    console.log("something went wrong", error);
    return res.status(500).json({ message: "server error" });
  }
});

app.get("/articles/:id", async (req, res) => {
  try {
    const fetchArticle = await ArticleTable.findById(req.params.id);
    return res
      .status(200)
      .json({
        message: "all articles fetch sucessfully",
        articles: fetchArticle,
      });
  } catch (error) {
    console.log("something went wrong", error);
    return res.status(500).json({ message: "server error" });
  }
});

app.patch("/articles/:id", async (req, res) => {
  try {
    const updatedArticle = await ArticleTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedArticle) {
      return res.status(500).json({ message: "couldn't update the data" });
    }
    return res
      .status(200)
      .json({ message: "updated succesfully", data: updatedArticle });
  } catch (error) {
    console.log("something went wrong", error);
  }
});

app.delete("/articles/:id", async (req, res) => {
  try {
    const deletedArticle = await ArticleTable.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "articles deleted sucessfully", data: deletedArticle });
  } catch (error) {
    console.log("something went wrong", error);
  }
});
