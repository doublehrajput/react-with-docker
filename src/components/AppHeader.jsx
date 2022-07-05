import { Burger, createStyles, Header, Title } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import React from 'react';

const useStyles = createStyles(theme => ({
  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  }
}));

/**
 * @type {React.FC<any>}
 * @returns {React.ReactElement}
 */
const AppHeader = () => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  return (
    <Header height={56}>
      <div className={classes.inner}>
        <Title order={2}>Micro Blog</Title>
        <Burger opened={opened} onClick={() => toggleOpened()} className={classes.burger} size="sm" />
      </div>
    </Header>
  );
};

AppHeader.displayName = 'AppHeader';

AppHeader.defaultProps = {};

AppHeader.propTypes = {};

export default AppHeader;
