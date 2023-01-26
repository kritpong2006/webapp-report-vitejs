import { Box, Container } from '@chakra-ui/react';

// Import By Project
import FormExpCoverPage from './components/FormExpCoverPage';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <Container maxW={'full'}>
          <Box padding={5}>
            <FormExpCoverPage />
          </Box>
        </Container>
      </div>
    </>
  );
}

export default App;
