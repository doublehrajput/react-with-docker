import BlogContainer from '@app/components/Blog/BlogContainer';
import { Container } from '@mantine/core';

/**
 * @type {React.FC<any>}
 * @returns {React.ReactElement}
 */
const HomePage = () => {
  return (
    <Container fluid>
      <BlogContainer />
    </Container>
  );
};

HomePage.displayName = 'HomePage';

HomePage.defaultProps = {};

HomePage.propTypes = {};

export default HomePage;
