/*
 * @Author: zhanggen 1519149300@qq.com
 * @Date: 2022-06-12 00:59:41
 * @LastEditors: zhanggen 1519149300@qq.com
 * @LastEditTime: 2022-06-12 01:01:01
 * @FilePath: \shortcut-practise\src\renderer\pages\shortcuts\dev\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const files = require.context('.', false, /\.js$/)
const app = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  app[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default app