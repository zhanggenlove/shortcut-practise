/*
 * @Author: zhanggen 1519149300@qq.com
 * @Date: 2022-06-12 01:01:56
 * @LastEditors: zhanggen 1519149300@qq.com
 * @LastEditTime: 2022-06-12 14:45:06
 * @FilePath: \shortcut-practise\src\renderer\pages\shortcuts\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import devApp from './dev'
import designApp from './design'
const appList = []

const dev = {
    type: '开发',
    app: []
}
dev.app.push(...Object.values(devApp))

const design = {
    type: '设计',
    app: []
}
design.app.push(...Object.values(designApp))




appList.push(dev, design)

export default appList