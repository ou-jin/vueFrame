// 判断数组是否存在某个元素
export function isExist (ary, e) {
  let flag = true
  for (var i = 0; i < ary.length; i++) {
    if (ary[i].path === e.path) {
      flag = false
      return flag
    }
  }
  return true
}
// 删除数组某一个元素
export function deleteOne (ary, e) {
  for (var i = 0; i < ary.length; i++) {
    if (ary[i].path === e) {
      ary.splice(i, 1)
    }
  }
  return ary
}
