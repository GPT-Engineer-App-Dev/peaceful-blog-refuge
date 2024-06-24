import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useColorMode, ColorModeProvider, useToast } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  useEffect(() => {
    const savedColorMode = localStorage.getItem('colorMode');
    if (savedColorMode) {
      setColorMode(savedColorMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  return (
    <ColorModeProvider>
      <Router>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} deletePost={deletePost} isAdmin={isAdmin} colorMode={colorMode} toggleColorMode={toggleColorMode} toast={toast} />} />
        <Route path="/new-post" element={<NewPost addPost={addPost} colorMode={colorMode} toggleColorMode={toggleColorMode} toast={toast} />} />
      </Routes>
    </Router>
    </ColorModeProvider>
  );
}

export default App;