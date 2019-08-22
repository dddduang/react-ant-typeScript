// 管理仓库能力模块

const defaultState = {
  pane: [
    { title: 'Home', content: 'Home', key: '1' },
    { title: 'Tab 1', content: 'Content of Tab 1', key: '2' },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '3' }
  ] // 这就相当于你给Store里增加了一个新的数据项
} // 默认数据
// state 是整个项目中需要管理的数据信息, 这里我们没有数据, 所以用空对象来表示
export default (state = defaultState, action: any) => { // 就是一个方法函数
  return state
} 