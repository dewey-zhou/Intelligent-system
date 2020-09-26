/*
通过mutation间接更新state的多个方法的对象
 */
import {reqMachines, reqPicture} from '../api/index'
import {RECEIVE_MACHINES, RECEIVE_PICTURE} from './mutation-types'
export default {
  async getMachines ({commit}) {
    // 发送异步ajax请求
    const result = await reqMachines()
    // 提交一个mutation
    const machines = result.RECORDS
    commit(RECEIVE_MACHINES, {machines})
  },
  async getPicture ({commit}) {
    // 发送异步ajax请求
    const result = await reqPicture()
    // 提交一个mutation
    const picture = result.RECORDS
    commit(RECEIVE_PICTURE, {picture})
  }
}
