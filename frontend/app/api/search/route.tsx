const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/Article"); // Adjust path if needed

const app = express();
app.use(express.json());

// MongoDB connection (if not already connected)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Search route
app.get("/api/search", async (req, res) => {
  const query = req.query.query;
  const page = parseInt(req.query.page) || 1;
  const limit = 5;

  if (!query) return res.json({ results: [], total: 0 });

  try {
    const results = await Article.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
        { categories: { $regex: query, $options: "i" } },
      ],
    })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Article.countDocuments({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
        { categories: { $regex: query, $options: "i" } },
      ],
    });

    res.json({ results, total, page, pages: Math.ceil(total / limit) });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



import { useState } from "react";
import axios from "axios";

export default function SearchFunctionality() {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (newPage = 1) => {
    if (!searchQuery.trim()) return;

    try {
      const response = await axios.get(`http://localhost:5000/api/search?query=${searchQuery}&page=${newPage}`);
      setArticles(response.data.results);
      setTotalPages(response.data.pages);
      setPage(newPage);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search articles..."
      />
      <button onClick={() => handleSearch()}>Search</button>

      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.shortDescription}</p>
          </li>
        ))}
      </ul>

      <div>
        <button disabled={page === 1} onClick={() => handleSearch(page - 1)}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => handleSearch(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
