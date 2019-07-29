import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

const MainContainer: React.FC = () => {

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        background: '#fff',
        minHeight: 280,
      }}
    >
      Content
    </Content>
  )
}

export default MainContainer