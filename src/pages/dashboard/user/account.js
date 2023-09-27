import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AccountView } from 'src/sections/account/view';

const AccountPage = () => (
  <>
    <Helmet>
      <title>Dashboard: Account Settings</title>
    </Helmet>
    <AccountView />
  </>
);

export default AccountPage;
