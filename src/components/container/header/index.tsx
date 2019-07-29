import React, { useContext } from 'react';
import './index.css'
import { Layout, Icon } from 'antd';
import { CollapsedContext } from '../context'

const { Header } = Layout;

interface Iprops {
  setCollapsed: (argumnet: boolean) => void
}

const HeaderContainer: React.FC<Iprops> = ({setCollapsed}) => {
  const collapsed = useContext(CollapsedContext) // useContext 接收一个context 对象(React.createContext的返回值) 并返回context的当前值. 当前的context值由上层组件中距离当前组件最近的<MyContext.Provider>的 value prop 决定.  当组件上层最近的<MyContext.Provider> 更新时,该Hook 会触发重渲染, 并使用最新传递给 MyContext provider 的 context value值

  return (
    <div>
      <Header style={{ background: '#282c34', padding: 0 }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={()=>setCollapsed(!collapsed)}
        />
      </Header>
    </div>
  )
}

export default HeaderContainer