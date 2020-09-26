/*
直接更新state的多个方法的对象
 */
// import Vue from 'vue'
import {
  RECEIVE_MACHINES,
  RECEIVE_PICTURE
} from './mutation-types'

export default {
  [RECEIVE_MACHINES] (state, {machines}) {
    state.machines = machines
  },
  [RECEIVE_PICTURE] (state, {picture}) {
    state.picture = picture
  }
}
