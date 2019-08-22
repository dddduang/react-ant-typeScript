import React, { useContext, useState } from 'react';
import './index.css'
import { Tabs, Button } from 'antd';
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
  const addTag = () => {
    panes.push({ title: 'Tab 10', content: 'Content of Tab 10', key: '10' })
    console.log(panes)
  }
  
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

      <Button type="primary" shape="circle" icon="plus-circle" onClick={addTag} />
    </div>
  )
}

export default Tags