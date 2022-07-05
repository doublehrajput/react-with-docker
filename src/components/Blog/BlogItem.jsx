import { Avatar, createStyles, Group, Paper, Text } from '@mantine/core';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = createStyles(theme => ({
  body: {
    paddingLeft: 74,
    paddingTop: theme.spacing.sm
  }
}));

/**
 * @type {React.FC<{image: string, owner: {firstName: string, lastName: string}, publishDate: string, text: string}>}
 * @returns {React.ReactElement}
 */
const BlogItem = ({ image, owner, publishDate, text }) => {
  const { classes } = useStyles();
  const fullName = owner.firstName + ' ' + owner.lastName;
  return (
    <Paper shadow={'sm'} p="md" m={0}>
      <Group>
        <Avatar src={image} alt={fullName} radius="xl" size={'lg'} />
        <div>
          <Text size="xl" weight={'bold'}>
            {fullName}
          </Text>
          <Text size="xs" color="dimmed">
            {publishDate}
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        {text}
      </Text>
    </Paper>
  );
};

BlogItem.displayName = 'BlogItem';

BlogItem.defaultProps = {};

BlogItem.propTypes = {
  image: PropTypes.string,
  owner: PropTypes.any,
  publishDate: PropTypes.string,
  text: PropTypes.string
};

export default BlogItem;
