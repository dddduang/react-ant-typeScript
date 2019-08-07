import React, { useState } from 'react';
import { Table, Divider, Tag, Button, Modal, Popconfirm } from 'antd';
import './index.css'

const { Column, ColumnGroup } = Table;

const record = ()=> { 
  return {
    onMouseEnter: (event: any) => {
      event.currentTarget.style.color = '#000'
      event.currentTarget.style.backgroundColor = '#fff'
      // console.log(event.currentTarget)
    }, // 鼠标移入行
    onMouseLeave: (event: any) => {
      event.currentTarget.style.color = '#fff'
      event.currentTarget.style.backgroundColor = 'rgb(58, 62, 65)'
    }
  }
} 

const DataBase: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  let [data, setData] = useState([
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '5',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '6',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '7',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '8',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '9',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '10',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '11',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '12',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '13',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '14',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '15',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },{
      key: '16',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
  ]);
  
  return (
    <div className="data-container">
      数据库登记管理 
      <Table dataSource={data} onRow={record} scroll={{ y: 300 }} >
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <span>
              {tags.map((tag: any) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </span>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record: any) => (
            <span>
              <Button type="link" onClick={() => setModalVisible(true)}>Invite {record.lastName}</Button>
              <Divider type="vertical" />
              <Popconfirm title="确定删除吗?" onConfirm={() => 
                setData(data.filter(item => {return item.key !== record.key}))
              }>
                <Button type="link">Delete</Button>
              </Popconfirm>
            </span>
          )}
        />
      </Table>

      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  )
}

export default DataBase