import React, { useState } from 'react';
import HeaderContainer from './header'
import SiderMenu from './sider'
import Content from './content'
import Footer from './footer'
import { Layout } from 'antd';
import { CollapsedContext } from './context'
import { RouteComponentProps } from 'react-router-dom'

const Container: React.FC<RouteComponentProps> = ({match, history, location}) => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <>
      <Layout style={{height: '100vh'}}>
        <CollapsedContext.Provider value={collapsed}>
          <SiderMenu match={match} history={history} location={location}/>
        </CollapsedContext.Provider>
        

        <Layout>
          <CollapsedContext.Provider value={collapsed}>
            <HeaderContainer setCollapsed={setCollapsed}/> {/** 类型“”中缺少属性“setCollapsed”，但类型“iprops”中需要该属性, 报错: Property 'setCollapsed' is missing in type '{}' but required in type 'Iprops'.  所以添加一项setCollapsed={setCollapsed}*/ }
          </CollapsedContext.Provider>

          <Content match={match} history={history} location={location}/>
          <Footer />
        </Layout>
      </Layout>
    </>
  )
}

export default Container