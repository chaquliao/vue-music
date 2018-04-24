//状态管理
//1.在state定义数据
//2.在getter里面对state定义的数据做映射，让组件里面可以用mapGetter获取到这些数据
//3.在mutation里面定义编辑state定义的数据修改方法
//  3.1. 在mutation-types里面,定义修改动作
//  3.2  在mutation里面进行修改的具体方法
import {playMode} from 'common/js/config.js'

const state = {
	singer:{},
	playing:false,
	fullScreen:false,
	playlist:[],
	sequenceList:[],
	mode:playMode.sequence,
	currentIndex:-1
}

export default state