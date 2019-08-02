import React from 'react';
import { Table, Divider, Tag, Button } from 'antd';
import './index.css'

const columns = [
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: { map: (arg0: (tag: any) => JSX.Element) => React.ReactNode; }) => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (record: { name: React.ReactNode; }) => (
      <span>
        <Button type="link">Invite {record.name}</Button>
        <Divider type="vertical" />
        <Button type="link">Delete</Button>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const record = ()=> { 
  return {
    onMouseEnter: (event: any) => {
      event.currentTarget.style.color = '#000'
      event.currentTarget.style.backgroundColor = '#fff'
      console.log(event.currentTarget)
    }, // 鼠标移入行
    onMouseLeave: (event: any) => {
      event.currentTarget.style.color = '#fff'
      event.currentTarget.style.backgroundColor = 'rgb(58, 62, 65)'
    }
  }
} 

const DataBase: React.FC = () => {
  return (
    <>
      数据库登记管理 
      <Table 
      columns={columns} 
      dataSource={data}  
      onRow={record} 
      />
    </>
  )
}

export default DataBase