import { Container } from '@mantine/core';
import React from 'react';
import BlogItem from './BlogItem';

/**
 * @type {React.FC<any>}
 * @returns {React.ReactElement}
 */
const BlogContainer = () => {
  return (
    <Container fluid>
      <BlogItem
        image="https://img.dummyapi.io/photo-1589469526983-0887ebe10072.jpg"
        text="Cooling off in the fountain white and black short ..."
        owner={{
          firstName: 'Jan',
          lastName: 'Siebert'
        }}
        publishDate="2020-05-14T16:28:10.135Z"
      />
    </Container>
  );
};

BlogContainer.displayName = 'BlogContainer';

BlogContainer.defaultProps = {};

BlogContainer.propTypes = {};

export default BlogContainer;
