import AppHeader from '@app/components/AppHeader';
import AppNavbar from '@app/components/AppNavbar';
import { AppShell } from '@mantine/core';
import React from 'react';
import { Outlet } from 'react-router';

/**
 * @type {React.FC<any>}
 * @returns {React.ReactElement}
 */
const AppLayout = () => {
  return (
    <AppShell header={<AppHeader />} navbar={<AppNavbar />}>
      <Outlet />
    </AppShell>
  );
};

AppLayout.displayName = 'AppLayout';

AppLayout.defaultProps = {};

AppLayout.propTypes = {};

export default AppLayout;
