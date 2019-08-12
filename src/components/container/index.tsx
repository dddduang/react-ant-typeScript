import React, { useState } from 'react';
import HeaderContainer from './header'
import Tags from './tags'
import SiderMenu from './sider'
import Content from './content'
import Footer from './footer'
import { Layout } from 'antd';
import { CollapsedContext, PaneContext } from './context'
import { RouteComponentProps } from 'react-router-dom'

const Container: React.FC<RouteComponentProps> = ({match, history, location}) => {
  const [collapsed, setCollapsed] = useState(true)
  const [pane, setPanes] = useState([
    { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    {
      title: 'Tab 3',
      content: 'Content of Tab 3',
      key: '3',
      // closable: false,
    },
  ])
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

          <PaneContext.Provider value={pane}>
            <Tags setPanes={setPanes} />
          </PaneContext.Provider>

          <Content match={match} history={history} location={location}/>
          <Footer />
        </Layout>
      </Layout>
    </>
  )
}

export default Container