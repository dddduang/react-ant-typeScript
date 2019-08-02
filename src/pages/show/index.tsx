import React from 'react';
import './index.css'
import { Card, Form, Input, Button, DatePicker} from 'antd'; // 1.引入 Form

const FormItem = Form.Item // 2.使用 formItem

type IProps = Readonly<{ // 3.定义props
  form: any
}>

//定义样式
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
}

const buttonItemLayout = {
  wrapperCol: { span: 14, offset: 4 }
}

const RegistrationForm = (props: IProps) => {
//这里用到了验证，所以要引入 getFieldDecorator
  const {
    form: { getFieldDecorator }
  } = props

  // const [name, setName] = useState('ddd')  
  // const [setAge] = useState(18)
  // const [setAddress] = useState('CHANGSHA')
  // const [setStartTime] = useState(2018-1-1)
  // const [setEndTime] = useState(2019-1-1)
  // props.form.setFieldsValue({
  //   name: 'rrr'
  // })

  const normalize = (value: any, prevValue: any, allValues: any) => {
    console.log(value, prevValue, allValues)
    return value
  }


  //我案例是用Modal的button去接受表单信息所以可以不用写
  const handleSubmit = (e: any) => {
    e.preventDefault() //阻止默认事件,这里只是说明使用方法
    props.form.validateFields((err: any) => {
      if (!err) {
        console.info('success');
      }
    });
    
  }

    return (
      <div style={{ background: '#ECECEC', padding: '30px', color: '#000', borderRadius: '5px' }}>
        设备数据检索展示
        <Card>
          <Form onSubmit={handleSubmit}>
            <FormItem label="姓名" {...formItemLayout}>
              {getFieldDecorator('name', {
                initialValue: 'ddd',
                normalize: normalize,
                rules: [{ required: true, message: 'Please input your username!' }]
              })(<Input placeholder="Please input your nickname" />)}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator('age', {
                initialValue: 18,
                rules: [{ required: true, message: 'Please input your age!' }]
              })(<Input type="number" placeholder="Please input your age" />)}
            </FormItem>
            <FormItem label="住址" {...formItemLayout}>
              {getFieldDecorator('address')(
                <Input placeholder="Please input your address" />
              )}
            </FormItem>
            <FormItem label="开始时间" {...formItemLayout}>
              {getFieldDecorator('startTime', {})(<DatePicker />)}
            </FormItem>
            <FormItem label="结束时间" {...formItemLayout}>
            {getFieldDecorator('endTime', {})(<DatePicker />)}
            </FormItem>
            
            <FormItem {...buttonItemLayout}>
              <Button type="primary" htmlType="submit" className="login-form-button">
                submit!
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )

}


//4. 将注册表单实例化并暴露出去
const UserForms = Form.create<IProps>()(RegistrationForm)
export default UserForms
// export default ShowData