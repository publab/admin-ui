<template>
	<div>
		<div class="inner">
			<a-input size="large" pattern="[0-9]*" placeholder="请输入登录账号" v-model="user_name" ref="userNameInput">
				<a-icon slot="prefix" type="user" />
				<a-tooltip slot="suffix" title="手机号">
					<a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
				</a-tooltip>
			</a-input>
			<br /><br/>

			<a-input-password size="large" v-model="password" placeholder="请输入密码" @pressEnter="login">
				<a-icon slot="prefix" type="lock" />
			</a-input-password>
			<br /><br/>

			<div class="submit-btn">
				<button @click="login">登 录</button>
			</div>
			<div class="connect">
				<p class="hd" align="center">
					<a @click="jump('/user/password')">《 忘记密码 》</a>
				</p>
			</div>
		</div>
		<div class="bottom-link">
			还没有帐号?<a @click="jump('/user/register')">马上注册</a>
		</div>
	</div>
</template>

<script>
    export default {
        name: "UserLogin",
        data() {
            return {
                user_name: '',
                password: '',
            };
        },
        methods: {
            login(){
                axios.post('token',{
                    data:{
                        'mobile': this.user_name,
                        'password': this.password,
                    }
                }).then((response) => {

                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    sessionStorage.setItem('access_token',response.data.token)
                    this.jump('/')

                });
            },
            register(){

            }
        }
    }
</script>
