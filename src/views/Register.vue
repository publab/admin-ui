<template>
	<div>
		<div class="inner">
			<a-input size="large" placeholder="您的注册手机号" v-model="user_name" ref="userNameInput">
				<a-icon slot="prefix" type="user" />
				<a-tooltip slot="suffix" title="手机号">
					<a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
				</a-tooltip>
			</a-input>
			<br /><br/>

			<a-input-password size="large" v-model="register_pwd" placeholder="注册密码">
				<a-icon slot="prefix" type="lock" />
			</a-input-password>
			<br /><br/>

			<a-input-password size="large" v-model="register_pwd_confirm" placeholder="确认注册密码">
				<a-icon slot="prefix" type="lock" />
			</a-input-password>
			<br /><br/>

			<a-input-group compact>
				<a-input size="large" style="width: 60%" v-model="register_code" defaultValue="验证码" />
				<a-button size="large" style="width: 40%" type="primary">发送短信</a-button>
			</a-input-group>
			<br />

			<div class="submit-btn">
				<button @click="register">立即注册</button>
			</div>
			<div class="connect">
				<p class="hd" align="center">
					<a>《 隐私条款 》</a>
				</p>
			</div>
		</div>
		<div class="bottom-link">
			已经注册?<a @click="jump('/user/login')">马上登录</a>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                user_name: '',
                register_pwd: '',
                register_pwd_confirm: '',
                register_code: ''
            };
        },
        methods: {
            register(){

            }
        }
    }
</script>
