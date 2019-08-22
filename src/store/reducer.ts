// 管理仓库能力模块
type item = {
  pathname?: string, 
  content?: string, 
  key?: string,
  closable?: boolean
}
type paneType = Array<item>

type defaultStateType = {
  pane: paneType,
  newPane: object
}

const defaultState:defaultStateType = {
  pane: [
    { pathname: 'Home', content: 'Home', key: '1', closable: false },
    { pathname: 'Tab 1', content: 'Content of Tab 1', key: '2' },
    { pathname: 'Tab 2', content: 'Content of Tab 2', key: '3' }
  ], // 这就相当于你给Store里增加了一个新的数据项
  newPane: {}
} // 默认数据
// state 是整个项目中需要管理的数据信息
export default (state = defaultState, action: any) => { // 就是一个方法函数
  return state
} 