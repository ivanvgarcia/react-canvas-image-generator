import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  //   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  //   const loading = useSelector(state => state.auth.loading);

  const renderUser = () =>
    user && (
      <div>
        <img src={user.profile_image_url_https} alt="" />
        <p>{user.name}</p>
      </div>
    );

  console.log(user);
  return (
    <div>
      <h2>Dashboard</h2>
      {renderUser()}
    </div>
  );
};

export default Dashboard;
