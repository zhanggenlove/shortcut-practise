<template>
    <div class="app">
        <div class="category" v-for="(item,index) of appList" :key="index">
            <div class="category-title">{{item.type}}</div>
            <div class="app-list">
                <div class="app-item" v-for="(app,i) of item.app" :key="i" @click="clickForApp(app)">
                    <img class="app-item-logo" :src="app.logo">
                    <div class="app-item-desc">
                        <div class="app-item-desc-name">{{app.title}}</div>
                        <div class="app-item-desc-prog-wrap">
                            <div class="app-item-desc-tips">90快捷键</div>
                            <el-progress type="circle" :width="16" :stroke-width="2" :percentage="10" color="#07c160"
                                :show-text="false"></el-progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dev  from '@/pages/shortcuts'
export default {
    data() {
        return {
            appList: [
                {
                    type: '开发',
                    app: [
                        {
                            title: 'VS Code',
                            file: 'vscode',
                            logo: require('@/assets/logo-visualstudiocode.png')
                        },
                        {
                            title: 'Android Studio',
                            file: 'androidstudio',
                            logo: require('@/assets/logo-androidstudio.png')
                        },
                        {
                            title: 'Xcode',
                            file: 'xcode',
                            logo: require('@/assets/logo-xcode.png')
                        }
                    ]
                }, {
                    type: '设计',
                    app: [
                        {
                            title: 'Adobe IIIustrator',
                            file: 'adobeiiiustrator',
                            logo: require('@/assets/logo-adobeillustrator.png')
                        },
                    ]
                }

            ]
        }
    },
    created() {
        console.log(dev)
    },
    methods:{
        clickForApp(app) {
            this.$router.push(`/${app.title}`)
        }
    }
}
</script>

<style scoped>
.app {
    height: 100vh;
    overflow-y: scroll;
    padding: 0 16px;
    background-color: #000;
}
.category {
    padding: 12px 0;
}
.category-title {
    margin-bottom: 5px;
    font-size: 14px;
    color: #fff;
}
.app-list {
    display: inline;
}
.app-item {
    display: inline-block;
    margin: 8px 16px 8px 0;
    width: 240px;
    padding: 18px 14px;
    border-radius: 10px;
    background-color: #252425;
    cursor: pointer;
}

.app-item-logo {
    width: 46px;
    height: 46px;
    margin-bottom: 15px;
}

.app-item-desc-prog-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.app-item-desc-name {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
}

.app-item-desc-tips {
    font-size: 12px;
    color: #838283;
}
</style>