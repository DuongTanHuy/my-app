import React from 'react';
import { Helmet } from 'react-helmet-async';
import UserProfileView from 'src/sections/user/view/user-profile-view';

const UserProfilePage = () => (
  <>
    <Helmet>
      <title>Dashboard: User Profile</title>
    </Helmet>
    <UserProfileView />
  </>
);

export default UserProfilePage;
