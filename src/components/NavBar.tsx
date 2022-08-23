import { Layout, Menu } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const NavBar: FC = () => {
  const router = useNavigate();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const menuItemsUnlog = [
    {
      key: '1',
      label: 'Логин',
      onClick: () => {
        router('/login');
      },
    },
  ];
  const menuItemsLoged = [
    {
      key: '1',
      label: `Выйти`,
      onClick: () => {
        logout();
      },
    },
  ];

  return (
    <Layout.Header>
      {isAuth ? (
        <div className="container__header">
          <div className="user__name">{user.username}</div>
          <Menu
            items={menuItemsLoged}
            theme="dark"
            mode="horizontal"
            selectable={false}
            style={{ justifyContent: 'end' }}></Menu>
        </div>
      ) : (
        <Menu
          items={menuItemsUnlog}
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ justifyContent: 'end' }}></Menu>
      )}
    </Layout.Header>
  );
};

export default NavBar;
