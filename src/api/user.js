import request from '@/utils/request'
export function getClassify(data) {
  return request({
    url: '/home/index/getClassifyHome',
    method: 'get',
    data
  })
}