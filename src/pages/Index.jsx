import React from 'react';
import { Box, Container, Flex, VStack, Heading, Text, Link, Input, Button, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box bg={bgColor} minHeight="100vh">
      {/* Header */}
      <Box as="header" bg={useColorModeValue("white", "gray.800")} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">My Personal Blog</Heading>
          <Flex as="nav">
            <Link mr={4}>Home</Link>
            <Link mr={4}>About</Link>
            <Link mr={4}>Contact</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <Flex direction={{ base: "column", md: "row" }} gap={8}>
          {/* Blog Posts */}
          <VStack as="main" spacing={8} align="stretch" flex={2}>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h2" size="xl" mb={4}>Latest Blog Post</Heading>
              <Text mb={4}>This is a preview of your latest blog post. It can contain a brief introduction or summary of the content.</Text>
              <Button colorScheme="blue">Read More</Button>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h2" size="xl" mb={4}>Another Blog Post</Heading>
              <Text mb={4}>This is a preview of another blog post. You can list multiple posts on the main page.</Text>
              <Button colorScheme="blue">Read More</Button>
            </Box>
          </VStack>

          {/* Sidebar */}
          <Box as="aside" width={{ base: "full", md: "250px" }}>
            <VStack spacing={6} align="stretch">
              <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                <Heading as="h3" size="md" mb={3}>About the Author</Heading>
                <Text>A brief description about the author of this blog. Share your expertise and what readers can expect.</Text>
              </Box>
              <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                <Heading as="h3" size="md" mb={3}>Search</Heading>
                <Flex>
                  <Input placeholder="Search posts..." />
                  <Button ml={2}><FaSearch /></Button>
                </Flex>
              </Box>
              <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                <Heading as="h3" size="md" mb={3}>Recent Posts</Heading>
                <VStack align="stretch">
                  <Link>Post Title 1</Link>
                  <Link>Post Title 2</Link>
                  <Link>Post Title 3</Link>
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
    </Box>
  );
};

export default Index;