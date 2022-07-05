import { Container, MantineProvider } from '@mantine/core';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ExplorePage from '@app/pages/ExplorePage';
import HomePage from '@app/pages/HomePage';
import theme from '@app/styles/theme';
import AppLayout from './layout/AppLayout';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Container fluid>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="explore" element={<ExplorePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </MantineProvider>
  );
};

export default hot(App);
