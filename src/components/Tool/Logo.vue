<template>
	<div class="header-logo" :class="[navtheme === 'dark' ? 'dark': 'light']">
		<img src="@/assets/logo.svg" alt="logo">
		<h1 v-if="showTitle">{{ title }}</h1>
	</div>
</template>

<script>

    export default {
        props: {
            title: {
                type: String,
                default: 'Zhiwei Duan',
                required: false
            },
            showTitle: {
                type: Boolean,
                default: true,
                required: false
            },
            navtheme: {
                type: String,
                required: false,
                default: 'dark'
            },
        }
    }
</script>
<style lang="less" scoped>
	@import "~@/assets/css/global";
	.header-logo {
		position: relative;
		height: 64px;
		overflow: hidden;
		line-height: 64px;
		transition: all .3s;
		&.dark {
			background: #002140;
			h1{
				color: #fff;
			}
		}

		&.light {
			background: #fff;
			h1{
				color: @primary-color;
			}
		}

		img,
		svg,
		h1 {
			display: inline-block;
			vertical-align: middle;
		}

		img,
		svg {
			height: 32px;
			width: 32px;
		}

		h1 {
			font-size: 20px;
			margin: 0 0 0 12px;
			font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
			font-weight: 600;
		}
	}
</style>
