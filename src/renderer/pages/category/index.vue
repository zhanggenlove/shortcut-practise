<template>
    <div class="container">
        <header class="header">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">应用</el-breadcrumb-item>
                <el-breadcrumb-item>{{app.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <header class="category-header">
            <img class="category-header-logo" :src="app.logo">
            <span class="category-header-title">{{ app.title }}</span>
        </header>
        <div class="category">
            <div class="category-title">快捷键</div>
            <div class="table-wrap">
                <el-table row-class-name="my-table" :data="app.list" :show-header="false" @row-click="rowClick">
                    <el-table-column prop="category" label="快捷键名称">
                    </el-table-column>
                    <el-table-column label="进度" width="120" align="center">
                        <template>
                            <div class="progress-wrap">
                                <span class="progress-text">2/12</span>
                                <el-progress class="progress" type="circle" :width="16" :stroke-width="2"
                                    :percentage="10" color="#07c160" :show-text="false"></el-progress>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column class-name="arrow-column" label="→" width="14" align="right">
                        <template>
                            <i class="el-icon-arrow-right table-icon"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import storejs from 'storejs'
export default {
    data() {
        return {
            app: {},
            categoryList: [],
        }
    },
    created() {
        const app = this.$route.params.app || storejs.get('app')
        if (app) {
            this.app = app
        }
        console.log(this.app.title)
    },
    methods: {
        rowClick(row) {
            this.$router.push({
                name: 'playground',
                params: {
                    shortCuts: row.list,
                    categoryTitle: row.category,
                    appTitle: this.app.title,
                    logo: this.app.logo
                }
            })
        }
    }
}
</script>

<style>
.header {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container {
    height: 100vh;
    padding: 0 16px;
    overflow-y: scroll;
    background-color: #000;
}

.category-header {
    padding: 46px 20px;
    display: flex;
    align-items: center;
}

.category-header-logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.category-header-title {
    color: #fff;
    font-size: 34px;
    font-weight: 500;
}

.category-title {
    margin-bottom: 10px;
    margin-left: 6px;
    font-size: 14px;
    color: #fff;
}

.table-wrap {
    padding: 6px;
    border-radius: 6px;
    background-color: #252425;
}

.my-table {
    font-size: 14px;
    color: #fff;
    background-color: #252425 !important;
    border-bottom-color: #252425 !important;
}

.my-table:hover {
    background-color: #252425 !important;
}

.progress-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.progress-text {
    margin-right: 6px;
    color: #999;
}

.arrow-column {
    color: #999;
}

.arrow-column .cell {
    padding: 0 !important;
}

.table-icon {
    font-size: 12px !important;
}

/* table */
.el-table td.el-table__cell {
    border-bottom: 1px solid #333 !important;
}

.el-table--border::after,
.el-table--group::after,
.el-table::before {
    content: none !important;
}

.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
    background: #333 !important;
    cursor: pointer;
}
</style>