<template>
    <a-col :md="24" :lg="7">
        <a-card :bordered="false">
            <div class="account-center-avatarHolder">
                <div class="avatar">
                    <img>
                </div>
                <div class="username"></div>
                <div class="bio">海纳百川，有容乃大</div>
            </div>
            <div class="account-center-detail">
                <p>
                    <i class="title"></i>交互专家
                </p>
                <p>
                    <i class="group"></i>蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
                </p>
                <p>
                    <i class="address"></i>
                    <span>浙江省</span>
                    <span>杭州市</span>
                </p>
            </div>
            <a-divider/>

            <div class="account-center-tags">
                <div class="tagsTitle">标签</div>
                <div>

                </div>
            </div>
            <a-divider :dashed="true"/>
        </a-card>
    </a-col>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
