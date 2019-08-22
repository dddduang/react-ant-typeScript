// 创建 store 仓库

import { createStore } from 'redux' // 引入 createStore 方法
import reducer from './reducer' // 创建好后引入

const store = createStore(reducer) // 创建数据存储仓库

export default store