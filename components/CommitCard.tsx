import { Box, Text, Link, Badge, VStack } from '@chakra-ui/react';
import { Commit } from '../types';

export const CommitCard = ({ commit }: { commit: Commit }) => {
  return (
    <Box bg="gray.800" borderRadius="2xl" p={5} shadow="lg" w="100%">
      <Text fontSize="lg" fontWeight="bold">{commit.author}</Text>
      <Text mt={2} color="gray.300">{commit.commit_message}</Text>
      <VStack align="start" mt={3} spacing={1}>
        {commit.files_modified.map((file, i) => (
          <Badge key={i} colorScheme="purple">{file}</Badge>
        ))}
      </VStack>
      <Text mt={3} fontSize="sm" color="gray.400">{new Date(commit.timestamp).toLocaleString()}</Text>
      <Link mt={2} color="brand.500" href={commit.commit_url} isExternal>Ver en GitHub</Link>
    </Box>
  );
};
