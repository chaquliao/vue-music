import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  const data = Object.assign({}, commonParams, {
    jsonpCallback:'MusicJsonCallback',
    loginUin:0,
    hostUin:0,
    platform:'yqq',
    needNewCode:0
  })
  console.log(jsonp(url, data, options))
  return jsonp(url, data, options)
}
