/*
 * @Author: zhanggen 1519149300@qq.com
 * @Date: 2022-06-12 00:21:13
 * @LastEditors: zhanggen 1519149300@qq.com
 * @LastEditTime: 2022-06-12 00:52:05
 * @FilePath: \shortcut-practise\src\renderer\pages\shortcuts\dev\photoshop.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    title: "Adobe Photoshop",
    logo: require("@/assets/logo-adobephotoshop.png"),
    list: [
        {
            category: "常用快捷键",
            list: [
                {
                    title: "自由变换",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 17, key: "Ctrl", text: "Ctrl", status: 2 },
                        { keyCode: 84, key: "T", text: "T", status: 2 },
                    ],
                },
                {
                    title: "减小画笔大小",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 219, key: "[", text: "[", status: 2 }
                    ],
                },
                {
                    title: "增加画笔大小",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 221, key: "]", text: "]", status: 2 }
                    ],
                },
                {
                    title: "降低画笔硬度",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                        { keyCode: 219, key: "[", text: "[", status: 2 }
                    ],
                },
                {
                    title: "增加画笔硬度",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                        { keyCode: 221, key: "]", text: "]", status: 2 }
                    ],
                },
                {
                    title: "默认前景色/背景色",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 68, key: "D", text: 'D', status: 2 }
                    ],
                },
                {
                    title: "切换前景色/背景色",
                    pass: false,
                    ios: [],
                    windows: [
                        { keyCode: 88, key: "X", text: 'X', status: 2 }
                    ],
                }
            ],
        },
    ],
};
