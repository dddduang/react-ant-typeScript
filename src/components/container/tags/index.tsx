import React, { useContext, useState } from 'react';
import './index.css'
import { Tabs } from 'antd';
import { PaneContext } from 'components/container/context'
import { RouteComponentProps } from 'react-router-dom'

const { TabPane } = Tabs;

interface Iprops {
  setPanes: (arg1: []) => void
}

const Tags: React.FC<Iprops & RouteComponentProps> = ({setPanes, location}) => {
  const panes = useContext(PaneContext)
  const [activeKey, setActiveKey] = useState(panes[0].key)
  const onChange = (activeKey: any) => {
    setActiveKey(activeKey)
    console.log(activeKey, location)
  };
  
  return (
    <div className="tagsContainer">
      <Tabs
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        hideAdd
      >
        {panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default Tags