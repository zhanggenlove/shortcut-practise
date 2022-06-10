<template>
    <div>
        <div v-if="!isShowHlight && !isTips">
            <div class="keyboard keyboard-empty"></div>
            <div class="keyboard-text"></div>
        </div>
        <div v-if="!isShowHlight && isTips">
            <div class="keyboard keyboard-tips">{{ code }}</div>
            <div class="keyboard-text">{{ text }}</div>
        </div>
        <div v-if="isShowHlight && correct">
            <div class="keyboard keyboard-hlight">
                <span>{{ code }}</span>
                <i class="el-icon-success keyboard-icon keyboard-icon-success"></i>
            </div>
            <div class="keyboard-text">{{ text }}</div>
        </div>
        <div v-if="isShowHlight && !correct">
            <div class="keyboard keyboard-hlight">
                <span>{{ code }}</span>
                <i class="el-icon-error keyboard-icon keyboard-icon-error"></i>
            </div>
            <div class="keyboard-text">{{ text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Keyboard',
    props: {
        isShowHlight: {
            type: Boolean,
            default: false
        },
        isTips: {
            type: Boolean,
            default: false
        },
        correct: {
            type: Boolean,
            default: true
        },
        code: '',
        text: ''
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.keyboard {
    width: 54px;
    height: 54px;
    position: relative;
    margin: 0 16px;
    background-color: #000000;
    border-radius: 8px;
    text-align: center;
    color: #999;
    font-size: 20px;
    font-weight: bold;
    line-height: 54px;
}

.keyboard-empty {
    border: 2px dashed #333;
}

.keyboard-tips {
    border: 2px solid#333;
}

.keyboard-hlight {
    background-color: #fff;
    color: #000000;
    box-shadow: 0 4px #999;
}

.keyboard-icon {
    position: absolute;
    font-size: 16px;
    right: -2px;
    top: -4px;
}

.keyboard-icon-success {
    color: #07c160;
}

.keyboard-icon-error {
    color: #F56C6C;
}

.keyboard-text {
    min-height: 20px;
    margin-top: 8px;
    color: #999;
}
</style>