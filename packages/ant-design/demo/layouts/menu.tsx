import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: 'button-demo',
    key: '/button-demo',
  },
  {
    label: 'table',
    key: '/xdlk-table',
  },
  {
    label: 'autoComplete',
    key: '/auto-complete',
  },
];

const App: React.FC = (props) => {
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    // console.log('click ', e);
    navigate(e.key);
  };


  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;