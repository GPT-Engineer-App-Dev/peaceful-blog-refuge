import React from 'react';
import { Box, Container, Flex, VStack, Heading, Text, Link, Input, Button, useColorModeValue, useColorMode, Switch } from "@chakra-ui/react";
import { FaSearch, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Index = ({ posts }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const headerBgColor = useColorModeValue("white", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.700");

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
                <Heading as="h2" size="xl" mb={4}>{post.title}</Heading>
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
    </Box>
  );
};

export default Index;