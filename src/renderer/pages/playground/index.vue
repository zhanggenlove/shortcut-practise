<template>
    <div class="container">
        <header class="header">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>
            <img class="app-logo" src="@/assets/logo-githubdesktop.png" />
        </header>
        <div class="content">
            <div class="shortcut-title">{{ shortCutList[index].title }}</div>
            <div class="playground">
                <keyboard v-for="(item, i) of shortCutList[index].shortCut" :key="i" :code="item.key" :text="item.text"
                    :isShowHlight="item.status != 2" :correct="item.status == 1" :isTips="false">
                </keyboard>
                <div v-if="shortCutList[index].shortCut.map(e => e.status).includes(0)" class="space"></div>
                <!-- 输入错误时候的提示参照 -->
                <template v-if="shortCutList[index].shortCut.map(e => e.status).includes(0)">
                    <keyboard v-for="item of shortCutList[index].shortCut" :key="item.key" :code="item.key"
                        :text="item.text" :isShowHlight="false" isTips>
                    </keyboard>
                </template>
            </div>
            <div class="progress">
                <el-progress type="circle" :width="20" :stroke-width="3" :percentage="10" color="#07c160"
                    :show-text="false"></el-progress>
            </div>
        </div>
    </div>
</template>

<script>
import Keyboard from '@/components/keyboard';
export default {
    components: { Keyboard },
    data() {
        return {
            index: 0,
            keyupCodeList: [],//监听并写入按下的键
            shortCutList: [
                {
                    title: "在上面插入行",
                    pass: false,
                    shortCut: [
                        { keyCode: 17, key: "Ctrl", text: 'Ctrl', status: 2 },
                        { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                        { keyCode: 13, key: " ↩", text: 'Enter', status: 2 },
                    ],
                }, {
                    title: "删除（删除）线",
                    pass: false,
                    shortCut: [
                        { keyCode: 17, key: "Ctrl", text: 'Ctrl', status: 2 },
                        { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                        { keyCode: 75, key: "K", text: 'K', status: 2 },
                    ],
                }
            ],
        };
    },
    mounted() {
        document.onkeydown = (e) => {
            //做一个超出键的拦截 TODO
            let key = window.event.keyCode;
            console.log(key)
            this.keyupCodeList.push(key)
            const hasKeyUpList = this.keyupCodeList
            const index = this.index
            var shortCutList = this.shortCutList
            const shortCut = shortCutList[index].shortCut
            const keyNum = shortCut.length
            const shortCutKeyCode = shortCut.map(e => e.keyCode)
            if (shortCutKeyCode.includes(key)) {//命中
                const i = shortCut.findIndex(f => f.keyCode == key)
                shortCutList[index].shortCut[i].status = 1
                if (hasKeyUpList.length >= keyNum) {//下一个 todo 判断是否越界
                    shortCutList[index].pass = true
                    //初始化数据
                    setTimeout(() => {
                        this.index += 1
                        this.keyupCodeList.length = 0
                    }, 300)
                }
            } else {//没有命中
                //1.提示错误
                const position = hasKeyUpList.length - 1
                for (let i = position; i < keyNum; i++) {
                    shortCutList[index].shortCut[i].status = 0
                }
                //2.初始数据
                this.keyupCodeList.length = 0
            }
            this.shortCutList = [...shortCutList]
        }
    }
}
</script>


<style scoped>
.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: black;
}

.content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}

.shortcut-title {
    margin-bottom: 40px;
    color: #fff;
    font-size: 22px;
    font-weight: 600;
}

.playground {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progress {
    position: absolute;
    right: 16px;
    bottom: 10px;
}

.space {
    width: 42px;
}

.el-breadcrumb__inner {
    color: #999 !important;
}

.header {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.app-logo {
    width: 20px;
    height: 20px;
}
</style>