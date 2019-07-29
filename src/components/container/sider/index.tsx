import React, { useContext } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { CollapsedContext } from '../context'

const { Sider } = Layout;

const SiderMenu: React.FC = () => {
  // 声明一个叫 "state" 的 state 变量
  const collapsed = useContext(CollapsedContext)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="fund" />
          <span>数据检索展示</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="radius-setting" />
          <span>数据展示/导出Excel</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="calendar" />
          <span>数据库登录管理</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderMenu
