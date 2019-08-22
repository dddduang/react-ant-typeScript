import React from 'react';
import './index.css'
import { Tabs } from 'antd';
import store from '../../../store'

const { TabPane } = Tabs;
const Tags: React.FC = () => {
  const state = store.getState()

  const onChange = (activeKey: any) => {
    console.log(activeKey)
  };
  
  return (
    <div className="tagsContainer">
      <Tabs
        onChange={onChange}
        type="editable-card"
        hideAdd
      >
        {state.pane.map(item => (
          <TabPane tab={item.pathname} key={item.key} closable={item.closable}> 
            {item.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default Tags