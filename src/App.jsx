import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useColorMode, ColorModeProvider } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
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
        <Route exact path="/" element={<Index posts={posts} colorMode={colorMode} toggleColorMode={toggleColorMode} />} />
        <Route path="/new-post" element={<NewPost addPost={addPost} colorMode={colorMode} toggleColorMode={toggleColorMode} />} />
      </Routes>
    </Router>
    </ColorModeProvider>
  );
}

export default App;
