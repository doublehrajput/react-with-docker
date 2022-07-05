import { createStyles, Navbar } from '@mantine/core';
import React from 'react';
import { BellRinging, Receipt2 } from 'tabler-icons-react';
import NavLink from './NavLink';

const useStyles = createStyles(theme => {
  return {
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white
    }
  };
});

const tabs = [
  { link: '', label: 'Feed', Icon: BellRinging },
  { link: 'explore', label: 'Explore', Icon: Receipt2 }
];

/**
 * @type {React.FC<any>}
 * @returns {React.ReactElement}
 */
const AppNavbar = () => {
  const { classes } = useStyles();

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow mt="xl">
        {tabs.map(item => (
          <NavLink key={item.label} {...item} />
        ))}
      </Navbar.Section>
    </Navbar>
  );
};

AppNavbar.displayName = 'AppNavbar';

AppNavbar.defaultProps = {};

AppNavbar.propTypes = {};

export default AppNavbar;
