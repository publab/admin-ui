<template>
	<a-list
			size="large"
			rowKey="id"
			:loading="loading"
			itemLayout="vertical"
			:dataSource="data"
	>
		<a-list-item :key="item.id" slot="renderItem" slot-scope="item">
			<template slot="actions">
                <span>
                  <a-icon type="star-o" style="margin-right: 8px" />
                  {{ item.star }}
                </span>
				<span>
                  <a-icon type="like-o" style="margin-right: 8px" />
                  {{ item.like }}
                </span>
				<span>
                  <a-icon type="message" style="margin-right: 8px" />
                  {{ item.message }}
                </span>
			</template>
			<a-list-item-meta>
				<a slot="title" href="https://vue.ant.design/">{{ item.title }}</a>
				<template slot="description">
                      <span>
                        <a-tag>Ant Design</a-tag>
                        <a-tag>设计语言</a-tag>
                        <a-tag>蚂蚁金服</a-tag>
                      </span>
				</template>
			</a-list-item-meta>
			<div class="antd-pro-components-article-list-content-index-listContent">
				<div class="description">
					<slot>
						{{ item.description }}
					</slot>
				</div>
				<div class="extra">
					<a-avatar :src="item.avatar" size="small" />
					<a :href="item.href">{{ item.owner }}</a> 发布在 <a :href="item.href">{{ item.href }}</a>
					<em>{{ item.updatedAt}}</em>
				</div>
			</div>
		</a-list-item>
		<div slot="footer" v-if="data.length > 0" style="text-align: center; margin-top: 16px;">
			<a-button :loading="loadingMore">加载更多</a-button>
		</div>
	</a-list>
</template>

<script>

    export default {
        name: 'Article',
        components: {

        },
        data () {
            return {
                loading: true,
                loadingMore: true,
                data: [
                    {
                        "id":1,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
                        "owner":"周星星",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":552,
                        "percent":519,
                        "like":907,
                        "message":501,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"Alipay",
                        "updatedAt":"1981-01-21 22:47:23",
                        "members":[
                            {
                                "avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png",
                                "name":"曲丽丽",
                                "id":"member1"
                            },
                            {
                                "avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png",
                                "name":"王昭君",
                                "id":"member2"
                            },
                            {
                                "avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png",
                                "name":"董娜娜",
                                "id":"member3"
                            }
                        ],
                        "activeUser":179870,
                        "newUser":1975,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
                    },
                    {
                        "id":2,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
                        "owner":"林东东",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":539,
                        "percent":817,
                        "like":923,
                        "message":268,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"Angular",
                        "updatedAt":"1998-07-03 15:08:45",
                        "members":[
                            {
                                "avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png",
                                "name":"曲丽丽",
                                "id":"member1"
                            },
                            {
                                "avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png",
                                "name":"王昭君",
                                "id":"member2"
                            },
                            {
                                "avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png",
                                "name":"董娜娜",
                                "id":"member3"
                            }
                        ],
                        "activeUser":141976,
                        "newUser":1539,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png"
                    },
                ]
            }
        },
        mounted () {
            setTimeout(()=> this.loading = false,1000);
        },
        methods: {

        }
    }
</script>
<style lang="less" scoped>
	@import '~@/assets/css/global.less';

	.antd-pro-components-article-list-content-index-listContent {
		.description {
			max-width: 720px;
			line-height: 22px;
		}
		.extra {
			margin-top: 16px;
			color: @text-color-secondary;
			line-height: 22px;

			& /deep/ .ant-avatar {
				position: relative;
				top: 1px;
				width: 20px;
				height: 20px;
				margin-right: 8px;
				vertical-align: top;
			}

			& > em {
				margin-left: 16px;
				color: @disabled-color;
				font-style: normal;
			}
		}
	}

	@media screen and (max-width: @screen-xs) {
		.antd-pro-components-article-list-content-index-listContent {
			.extra {
				& > em {
					display: block;
					margin-top: 8px;
					margin-left: 0;
				}
			}
		}
	}
</style>
