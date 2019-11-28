<template>
    <div id="wrapper" :style="{  backgroundImage: 'url(https://tinyuse.oss-cn-beijing.aliyuncs.com/loginbgimg/'+(Math.floor(Math.random()*39)+1)+'.jpg)'}">
        <div class="container">
            <div title="返回首页" class="logo"></div>
            <div class="signup-forms flip">
                <!-- signup -->
                <div class="signup-box" style="display: none;">
                    <div class="inner">
                        <div class="form-field">
                            <input id="mail_reg" type="text" autocomplete="off" maxlength="40" placeholder="您的注册手机号" />
                            <div class="err-tip" style="display: none;"></div>
                        </div>
                        <div class="form-field">
                            <input id="pwd_confirm" type="password" autocomplete="off" maxlength="40" placeholder="注册密码" /></div>
                        <div class="form-field">
                            <input id="repwd_confirm" type="password" autocomplete="off" maxlength="40" placeholder="确认注册密码" /></div>
                        <div class="form-field">
                            <div class="clearfix">
                                <span id="sms_send" class="vcode-send">点击发送验证码</span>
                                <input id="code_reg" type="text" autocomplete="off" maxlength="4" placeholder="手机验证码" class="vcode-input" /></div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="submit-btn">
                            <button class="submit_login">立即注册</button></div>
                        <div class="connect">
                            <p class="hd" align="center">
                                <a style="width:auto; height:auto;" target="_blank">《隐私条款》</a></p>
                        </div>
                    </div>
                    <div class="bottom-link">已经注册?
                        <a>马上登录</a></div>
                </div>
                <!-- /signup -->
                <!-- signpwd -->
                <div class="signup-box" style="display: none;">
                    <div class="inner">
                        <div class="form-field">
                            <input id="mobile_pwd" type="text" autocomplete="off" maxlength="40" placeholder="您的注册手机号" />
                            <div class="err-tip" style="display: none;"></div>
                        </div>
                        <div class="form-field">
                            <input id="pwd_pwd" type="password" autocomplete="off" maxlength="40" placeholder="重置密码" /></div>
                        <div class="form-field">
                            <input id="repwd_pwd" type="password" autocomplete="off" maxlength="40" placeholder="确认重置密码" /></div>
                        <div class="form-field">
                            <div class="clearfix">
                                <span id="sms_send_pwd" class="vcode-send">点击发送验证码</span>
                                <input id="code_pwd" type="text" autocomplete="off" maxlength="4" placeholder="手机验证码" class="vcode-input" /></div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="submit-btn">
                            <button class="submit_login">找回密码</button></div>
                        <div class="connect">
                            <p class="hd" align="center">
                                <a style="width:auto; height:auto;" target="_blank">《隐私条款》</a></p>
                        </div>
                    </div>
                    <div class="bottom-link">
                        <a>马上登录</a></div>
                </div>
                <!-- /signpwd -->
                <!-- signin(login) -->
                <div class="login-box" style="display: block;">
                    <div class="inner">
                        <div class="form-field">
                            <input id="mail_login" type="text" autocomplete="off" maxlength="40" placeholder="您的手机号" />
                            <div class="err-tip" style="display: none;"></div>
                        </div>
                        <div class="form-field">
                            <input id="sec_code" type="password" autocomplete="off" maxlength="40" placeholder="请输入密码" /></div>
                        <div class="form-field">
                            <div class="clearfix">
                                    <span class="vcode-send">
                                        <img class="captcha_pic_login" style="width:120px;" title="点击刷新验证码" alt="点击刷新验证码" src="" /></span>
                                <input id="captcha_login" type="text" autocomplete="off" maxlength="4" placeholder="验证码" class="vcode-input" /></div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="submit-btn">
                            <button class="submit_login">登 录</button></div>
                        <div class="connect">
                            <p class="hd" align="center">
                                <a style="width:auto; height:auto;">《 忘记密码 》</a></p>
                        </div>
                    </div>
                    <div class="bottom-link">还没有帐号?
                        <a>马上注册</a></div>
                </div>
                <!-- /signin(login) -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
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
