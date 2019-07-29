import React, { useContext } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { CollapsedContext } from '../context'
import { RouteComponentProps } from 'react-router-dom'

const { Sider } = Layout;

const SiderMenu: React.FC<RouteComponentProps> = ({match, history}) => {
  // 声明一个叫 "state" 的 state 变量
  const collapsed = useContext(CollapsedContext)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" 
        mode="inline" 
        defaultSelectedKeys={['1']}
        onClick={(item) => { 
          history.push(`${match.url}/${item.key}`) }}
      >
        <Menu.Item key="dataBase">
          <Icon type="fund" />
          <span>数据检索展示</span>
        </Menu.Item>
        <Menu.Item key="excel">
          <Icon type="radius-setting" />
          <span>数据展示/导出Excel</span>
        </Menu.Item>
        <Menu.Item key="show">
          <Icon type="calendar" />
          <span>数据库登录管理</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderMenu
