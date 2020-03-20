<template>
    <a-layout-header style="background: #fff; padding: 0 20px;">
        <a-row>
            <a-col :span="4">
                <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"/>
            </a-col>
            <a-col :span="20" :style="{textAlign: 'right'}">
                <user-menu></user-menu>
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script>
    import UserMenu from '@/components/Tool/UserMenu'

    export default {
        data() {
            return {

            };
        },
        components: {
            UserMenu
        },
        props: {
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
        },
        methods: {
            toggle () {
                this.$emit('toggle')
            }
        }
    }
</script>
<style scoped>
    .trigger {
        font-size: 18px;
        line-height: 64px;
        cursor: pointer;
        transition: color 0.3s;
    }

    .trigger:hover {
        color: #1890ff;
    }
</style>
