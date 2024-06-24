import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Title and content are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const newPost = {
      id: Date.now(),
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
      image,
      date: new Date().toISOString(),
    };
    addPost(newPost);
    toast({
      title: "Success",
      description: "New post added successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate('/');
  };

  return (
    <Box maxWidth="800px" margin="auto" mt={8} bg={bgColor} color={textColor} p={6} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter post title" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter post content" />
          </FormControl>
          <FormControl>
            <FormLabel>Tags (comma-separated)</FormLabel>
            <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Enter tags" />
          </FormControl>
          <FormControl>
            <FormLabel>Featured Image URL</FormLabel>
            <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" />
          </FormControl>
          <Button type="submit" colorScheme="blue">Add Post</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default NewPost;