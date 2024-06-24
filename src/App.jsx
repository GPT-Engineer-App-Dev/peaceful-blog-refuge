import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useState } from "react";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} />} />
        <Route path="/new-post" element={<NewPost addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
