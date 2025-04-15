import { useEffect, useState } from 'react';
import { ChakraProvider, Container, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { CommitCard } from '../components/CommitCard';
import { fetchCommits } from '../utils/fetchCommits';
import { Commit } from '../types';
import { theme } from '../theme';

export default function Home() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommits()
      .then(data => setCommits(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="4xl" pt={10}>
        <Heading mb={8} color="brand.500">📡 Últimos Commits</Heading>
        {loading ? (
          <Spinner color="brand.500" size="xl" />
        ) : (
          <SimpleGrid columns={[1, 1, 2]} spacing={6}>
            {commits.map((commit) => (
              <CommitCard key={commit.id} commit={commit} />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </ChakraProvider>
  );
}
