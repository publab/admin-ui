<template>
    <div id="wrapper" :style="{  backgroundImage: 'url(https://tinyuse.oss-cn-beijing.aliyuncs.com/loginbgimg/'+img_index+'.jpg)'}">
        <div class="container">
            <div title="返回首页" class="logo"></div>
            <!-- signin(login) -->
            <div v-if="show == 1">
                <div class="inner">
                    <a-input size="large" placeholder="请输入登录账号" v-model="user_name" ref="userNameInput">
                        <a-icon slot="prefix" type="user" />
                        <a-tooltip slot="suffix" title="手机号">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
                    <br /><br/>

                    <a-input size="large" type="password" placeholder="请输入密码" v-model="password" ref="userNameInput">
                        <a-icon slot="prefix" type="lock" />
                        <a-tooltip slot="suffix" title="密码">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
                    <br /><br/>

                    <div class="submit-btn">
                        <button @click="login">登 录</button>
                    </div>
                    <div class="connect">
                        <p class="hd" align="center">
                            <a @click="show=3">《 忘记密码 》</a>
                        </p>
                    </div>
                </div>
                <div class="bottom-link">
                    还没有帐号?<a @click="show=2">马上注册</a>
                </div>
            </div>
            <!-- /signin(login) -->
            <!-- signup -->
            <div v-if="show == 2">
                <div class="inner">
                    <a-input size="large" placeholder="您的注册手机号" v-model="user_name" ref="userNameInput">
                        <a-icon slot="prefix" type="user" />
                        <a-tooltip slot="suffix" title="手机号">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
                    <br /><br/>

                    <a-input size="large" placeholder="注册密码" v-model="register_pwd" ref="userNameInput">
                        <a-icon slot="prefix" type="lock" />
                        <a-tooltip slot="suffix" title="注册密码">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
                    <br /><br/>

                    <a-input size="large" placeholder="确认注册密码" v-model="register_pwd_confirm" ref="userNameInput">
                        <a-icon slot="prefix" type="lock" />
                        <a-tooltip slot="suffix" title="确认注册密码">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
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
                    已经注册?<a @click="show=1">马上登录</a>
                </div>
            </div>
            <!-- /signup -->
            <!-- signpwd -->
            <div v-if="show == 3">
                <div class="inner">

                    <a-input size="large" placeholder="您的注册手机号" v-model="user_name" ref="userNameInput">
                        <a-icon slot="prefix" type="user" />
                        <a-tooltip slot="suffix" title="手机号">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
                    <br /><br/>

                    <a-input size="large" placeholder="重置密码" v-model="reset_pwd" ref="userNameInput">
                        <a-icon slot="prefix" type="lock" />
                        <a-tooltip slot="suffix" title="重置密码">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
                    <br /><br/>

                    <a-input size="large" placeholder="确认重置密码" v-model="reset_pwd_confirm" ref="userNameInput">
                        <a-icon slot="prefix" type="lock" />
                        <a-tooltip slot="suffix" title="确认重置密码">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
                    <br /><br/>

                    <a-input-group compact>
                        <a-input size="large" style="width: 60%" v-model="reset_code" defaultValue="验证码" />
                        <a-button size="large" style="width: 40%" type="primary">发送短信</a-button>
                    </a-input-group>
                    <br/>

                    <div class="submit-btn">
                        <button>找回密码</button>
                    </div>
                    <div class="connect">
                        <p class="hd" align="center">
                            <a>《 隐私条款 》</a>
                        </p>
                    </div>
                </div>
                <div class="bottom-link">
                    <a @click="show=1">马上登录</a>
                </div>
            </div>
            <!-- /signpwd -->

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user_name: '',
                password: '',
                register_pwd: '',
                register_pwd_confirm: '',
                register_code: '',
                reset_pwd: '',
                reset_pwd_confirm: '',
                reset_code: '',
                show:1,
                img_index: Math.floor(Math.random()*39)+1,
                collapsed: true,
                defaultSelected: [
                    "13"
                ]
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
    };
</script>
<style scoped lang="scss">
    @import '../assets/css/login.scss';
</style>
