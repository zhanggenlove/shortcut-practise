<template>
    <div class="container">
        <header class="category-header">
            <img class="category-header-logo" src="@/assets/logo-visualstudiocode.png">
            <span class="category-header-title">Sketch</span>
        </header>
        <div class="category">
            <div class="category-title">{{ categoryList[0].category }}</div>
            <div class="table-wrap">
                <el-table row-class-name="my-table" :data="categoryList[0].list" :show-header="false">
                    <el-table-column prop="title" label="快捷键名称">
                    </el-table-column>
                    <el-table-column label="进度" width="120" align="center">
                        <template>
                            <div class="progress-wrap">
                                <span class="progress-text">2/12</span>
                                <el-progress type="circle" :width="16" :stroke-width="2" :percentage="10" color="#07c160"
                                :show-text="false"></el-progress>
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
export default {
    data() {
        return {
            categoryList: [
                {
                    category: 'Popular shortcuts1',
                    list: [{
                        title: "在上面插入行",
                        pass: false,
                        shortCut: [
                            { keyCode: 17, key: "Ctrl", text: 'Ctrl', status: 2 },
                            { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                            { keyCode: 13, key: " ↩", text: 'Enter', status: 2 },
                        ],
                    }, {
                        title: "在上面插入行",
                        pass: false,
                        shortCut: [
                            { keyCode: 17, key: "Ctrl", text: 'Ctrl', status: 2 },
                            { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                            { keyCode: 13, key: " ↩", text: 'Enter', status: 2 },
                        ],
                    }, {
                        title: "在上面插入行",
                        pass: false,
                        shortCut: [
                            { keyCode: 17, key: "Ctrl", text: 'Ctrl', status: 2 },
                            { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                            { keyCode: 13, key: " ↩", text: 'Enter', status: 2 },
                        ],
                    }]
                },
                {
                    category: 'Work with documents',
                    list: [{
                        title: "在上面插入行",
                        pass: false,
                        shortCut: [
                            { keyCode: 17, key: "Ctrl", text: 'Ctrl', status: 2 },
                            { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                            { keyCode: 13, key: " ↩", text: 'Enter', status: 2 },
                        ],
                    }, {
                        title: "在上面插入行",
                        pass: false,
                        shortCut: [
                            { keyCode: 17, key: "Ctrl", text: 'Ctrl', status: 2 },
                            { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                            { keyCode: 13, key: " ↩", text: 'Enter', status: 2 },
                        ],
                    }, {
                        title: "在上面插入行",
                        pass: false,
                        shortCut: [
                            { keyCode: 17, key: "Ctrl", text: 'Ctrl', status: 2 },
                            { keyCode: 16, key: "⇧", text: 'Shift', status: 2 },
                            { keyCode: 13, key: " ↩", text: 'Enter', status: 2 },
                        ],
                    }]
                }
            ],
        }
    },
    created() {
        console.log(this.$route.params.app)
    }
}
</script>

<style>
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
    margin-bottom: 5px;
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
.el-table--border::after, .el-table--group::after, .el-table::before {
    content: none !important;
}
.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
    background: #333 !important;
    cursor: pointer;
}
</style>