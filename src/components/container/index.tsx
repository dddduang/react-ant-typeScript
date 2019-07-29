import React, { useState } from 'react';
import HeaderContainer from './header'
import SiderMenu from './sider'
import { Layout } from 'antd';
import { CollapsedContext } from './context'

const Container: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <>
      <Layout>
        <CollapsedContext.Provider value={collapsed}>
          <SiderMenu />
        </CollapsedContext.Provider>
        

        <Layout>
          <CollapsedContext.Provider value={collapsed}>
            <HeaderContainer setCollapsed={setCollapsed}/> {/** 类型“”中缺少属性“setCollapsed”，但类型“iprops”中需要该属性, 报错: Property 'setCollapsed' is missing in type '{}' but required in type 'Iprops'.  所以添加一项setCollapsed={setCollapsed}*/ }
          </CollapsedContext.Provider>
        </Layout>
      </Layout>
    </>
  )
}

export default Container