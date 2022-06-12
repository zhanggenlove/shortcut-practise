/*
 * @Author: zhanggen 1519149300@qq.com
 * @Date: 2022-06-12 14:07:15
 * @LastEditors: zhanggen 1519149300@qq.com
 * @LastEditTime: 2022-06-12 14:25:40
 * @FilePath: \shortcut-practise\src\renderer\pages\shortcuts\dev\androidstudio.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    title: "Android Studio",
    logo: require("@/assets/logo-androidstudio.png"),
    list: [
        {
            category: "常用快捷键",
            list: [
                {
                    title: "保存",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 17, key: "Ctrl", text: "Ctrl", status: 2 },
                        { keyCode: 83, key: "S", text: "S", status: 2 },
                    ],
                },
                {
                    title: "同步",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 17, key: "Ctrl", text: "Ctrl", status: 2 },
                        { keyCode: 18, key: " Alt", text: " Alt", status: 2 },
                        { keyCode: 89, key: "Y", text: "Y", status: 2 }
                    ],
                },
                {
                    title: "最大化/最小化编辑器",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 17, key: "Ctrl", text: "Ctrl", status: 2 },
                        { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                        { keyCode: 123, key: "F12", text: "F12", status: 2 }
                    ],
                },
                {
                    title: "添加到收藏夹",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 17, key: "Ctrl", text: "Ctrl", status: 2 },
                        { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                        { keyCode: 38, key: "↑", text: "↑", status: 2 }
                    ],
                },
                {
                    title: "使用当前配置文件检查当前文件",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 18, key: " Alt", text: " Alt", status: 2 },
                        { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                        { keyCode: 73, key: "I", text: "I", status: 2 }
                    ],
                },
                {
                    title: "打开设置对话框",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 17, key: "Ctrl", text: "Ctrl", status: 2 },
                        { keyCode: 18, key: " Alt", text: " Alt", status: 2 },
                        { keyCode: 83, key: "S", text: "S", status: 2 }
                    ],
                },
                {
                    title: "打开项目结构对话框",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 17, key: "Ctrl", text: "Ctrl", status: 2 },
                        { keyCode: 18, key: " Alt", text: " Alt", status: 2 },
                        { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                        { keyCode: 83, key: "S", text: "S", status: 2 }
                    ],
                },
                {
                    title: "在选项卡和工具窗口之间切换",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 17, key: "Ctrl", text: "Ctrl", status: 2 },
                        { keyCode: 9, key: " Tab", text: " Tab", status: 2 }
                    ],
                }
            ],
        },
    ],
};