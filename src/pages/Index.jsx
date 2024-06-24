import React from 'react';
import { Box, Container, Flex, VStack, Heading, Text, Link, Input, Button, useColorModeValue, useColorMode, Switch, IconButton, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { FaSearch, FaTwitter, FaFacebook, FaInstagram, FaTrash } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Index = ({ posts, deletePost, isAdmin, toast }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const headerBgColor = useColorModeValue("white", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.700");

  const [isOpen, setIsOpen] = React.useState(false);
  const [postToDelete, setPostToDelete] = React.useState(null);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleDeleteConfirm = () => {
    if (postToDelete) {
      deletePost(postToDelete);
      toast({
        title: "Post deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsOpen(false);
  };

  return (
    <Box bg={bgColor} minHeight="100vh">
      {/* Header */}
      <Box as="header" bg={headerBgColor} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">My Personal Blog</Heading>
          <Flex as="nav" align="center">
            <Link as={RouterLink} to="/" mr={4}>Home</Link>
            <Link as={RouterLink} to="/new-post" mr={4}>New Post</Link>
            <Link mr={4}>About</Link>
            <Link mr={4}>Contact</Link>
            <Switch
              isChecked={colorMode === 'dark'}
              onChange={toggleColorMode}
              mr={2}
            />
            <Text fontSize="sm">{colorMode === 'dark' ? 'Dark' : 'Light'} Mode</Text>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <Flex direction={{ base: "column", md: "row" }} gap={8}>
          {/* Blog Posts */}
          <VStack as="main" spacing={8} align="stretch" flex={2}>
            {posts.map((post) => (
              <Box key={post.id} bg={cardBgColor} p={6} borderRadius="md" boxShadow="md">
                <Flex justify="space-between" align="center" mb={4}>
                  <Heading as="h2" size="xl">{post.title}</Heading>
                  {isAdmin && (
                    <IconButton
                      icon={<FaTrash />}
                      aria-label="Delete post"
                      onClick={() => {
                        setPostToDelete(post.id);
                        setIsOpen(true);
                      }}
                    />
                  )}
                </Flex>
                <Text mb={4}>{post.content.substring(0, 200)}...</Text>
                <Button colorScheme="blue">Read More</Button>
              </Box>
            ))}
          </VStack>

          {/* Sidebar */}
          <Box as="aside" width={{ base: "full", md: "250px" }}>
            <VStack spacing={6} align="stretch">
              <Box bg={cardBgColor} p={4} borderRadius="md" boxShadow="md">
                <Heading as="h3" size="md" mb={3}>About the Author</Heading>
                <Text>A brief description about the author of this blog. Share your expertise and what readers can expect.</Text>
              </Box>
              <Box bg={cardBgColor} p={4} borderRadius="md" boxShadow="md">
                <Heading as="h3" size="md" mb={3}>Search</Heading>
                <Flex>
                  <Input placeholder="Search posts..." />
                  <Button ml={2}><FaSearch /></Button>
                </Flex>
              </Box>
              <Box bg={cardBgColor} p={4} borderRadius="md" boxShadow="md">
                <Heading as="h3" size="md" mb={3}>Recent Posts</Heading>
                <VStack align="stretch">
                  {posts.slice(0, 3).map((post) => (
                    <Link key={post.id}>{post.title}</Link>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg={useColorModeValue("gray.100", "gray.700")} py={6} px={8}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text>&copy; 2023 My Personal Blog. All rights reserved.</Text>
            <Flex mt={{ base: 4, md: 0 }}>
              <Link href="#" mr={4}><FaTwitter /></Link>
              <Link href="#" mr={4}><FaFacebook /></Link>
              <Link href="#" mr={4}><FaInstagram /></Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteConfirm} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default Index;