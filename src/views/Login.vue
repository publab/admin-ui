<template>
    <div id="wrapper" :style="{  backgroundImage: 'url(https://tinyuse.oss-cn-beijing.aliyuncs.com/loginbgimg/'+imgIndex+'.jpg)'}">
        <div class="container">
            <div title="返回首页" class="logo"></div>
            <!-- signin(login) -->
            <div v-if="show == 1">
                <div class="inner">
                    <a-input size="large" placeholder="请输入登录账号" v-model="userName" ref="userNameInput">
                        <a-icon slot="prefix" type="user" />
                        <a-tooltip slot="suffix" title="手机号">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
                    <br /><br/>

                    <a-input size="large" placeholder="请输入密码" v-model="userName" ref="userNameInput">
                        <a-icon slot="prefix" type="lock" />
                        <a-tooltip slot="suffix" title="密码">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input>
                    <br /><br/>

                    <div class="submit-btn">
                        <router-link to="/"><button>登 录</button></router-link>
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
                    <div class="form-field">
                        <input id="mail_reg" type="text" autocomplete="off" maxlength="40" placeholder="您的注册手机号" />
                    </div>
                    <div class="form-field">
                        <input id="pwd_confirm" type="password" autocomplete="off" maxlength="40" placeholder="注册密码" />
                    </div>
                    <div class="form-field">
                        <input id="repwd_confirm" type="password" autocomplete="off" maxlength="40" placeholder="确认注册密码" />
                    </div>
                    <div class="form-field">
                        <div class="clearfix">
                            <span id="sms_send" class="vcode-send">点击发送验证码</span>
                            <input id="code_reg" type="text" autocomplete="off" maxlength="4" placeholder="手机验证码" class="vcode-input" />
                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="submit-btn">
                        <button>立即注册</button>
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
                    <div class="form-field">
                        <input id="mobile_pwd" type="text" autocomplete="off" maxlength="40" placeholder="您的注册手机号" />
                    </div>
                    <div class="form-field">
                        <input id="pwd_pwd" type="password" autocomplete="off" maxlength="40" placeholder="重置密码" />
                    </div>
                    <div class="form-field">
                        <input id="repwd_pwd" type="password" autocomplete="off" maxlength="40" placeholder="确认重置密码" />
                    </div>
                    <div class="form-field">
                        <div class="clearfix">
                            <span id="sms_send_pwd" class="vcode-send">点击发送验证码</span>
                            <input id="code_pwd" type="text" autocomplete="off" maxlength="4" placeholder="手机验证码" class="vcode-input" />
                        </div>
                        <div class="clearfix"></div>
                    </div>

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
                userName: '',
                show:1,
                imgIndex: Math.floor(Math.random()*39)+1,
                collapsed: true,
                defaultSelected: [
                    "13"
                ]
            };
        },
        mounted (){

        },
        methods: {
            jump(path){
                path && this.$route.path != path ? this.$router.push(path):null;
            },
            topSelect(){
                window.console.log(1111);
            },
            titleClick(e) {
                window.console.log('titleClick', e);
            },
        }
    };
</script>
<style scoped lang="scss">
    @import '../assets/css/login.scss';
</style>
