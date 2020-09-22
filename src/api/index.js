
/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:8888'
const BASE_URL = '/api'

// 1、获取机台信息
export const reqMachine = () => ajax(BASE_URL + '/machine')
// 2.获取故障原因
export const reqReason = () => ajax(BASE_URL + '/reason')
// 1、获取机台信息
export const reqPicture = () => ajax(BASE_URL + '/picture')
// 1、获取机台信息
export const reqStatus = () => ajax(BASE_URL + '/status')
