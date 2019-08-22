import React from 'react';
import  { FormComponentProps } from 'antd/es/form'

// const ExcelShow: React.FC = () => {
//   return (
//     <>
//       设备数据展示/导出(Excel)
//     </>
//   )
// }


import { Form, Icon, Input, Button, Checkbox } from 'antd';

const NormalLoginForm:React.SFC<FormComponentProps>=(props) => {
  const { getFieldDecorator } = props.form
   const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  };


    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        {/* <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item> */}
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    )
}

const ExcelShow = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default ExcelShow
