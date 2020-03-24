<template>
	<div class="ant-pro-pages-account-projects-cardList">
		<a-list :loading="loading" :data-source="data" :grid="{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }">
			<a-list-item slot="renderItem" slot-scope="item">
				<a-card class="ant-pro-pages-account-projects-card" hoverable>
					<img slot="cover" :src="item.cover" :alt="item.title" />
					<a-card-meta :title="item.title">
						<template slot="description">
							<ellipsis :length="50">{{ item.description }}</ellipsis>
						</template>
					</a-card-meta>
					<div class="cardItemContent">
						<span>{{ item.updatedAt | fromNow}}</span>
						<div class="avatarList">
                            <template v-for="(member, i) in item.members">
                                <a-avatar :key="i" size="small" :src="member.avatar" />
                            </template>
						</div>
					</div>
				</a-card>
			</a-list-item>
		</a-list>
	</div>
</template>

<script>
    import moment from 'moment'
    import { Ellipsis } from '@/components'

    export default {
        name: 'Project',
        components: {
            Ellipsis,
        },
        data () {
            return {
                form: this.$form.createForm(this),
                loading: true,
                data: [
                    {
                        "id":1,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
                        "owner":"林东东",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":133,
                        "percent":601,
                        "like":137,
                        "message":108,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"Alipay",
                        "updatedAt":"1988-12-20 07:34:40",
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
                        "activeUser":159980,
                        "newUser":1803,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
                    },
                    {
                        "id":2,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
                        "owner":"曲丽丽",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":343,
                        "percent":156,
                        "like":699,
                        "message":166,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"Angular",
                        "updatedAt":"2018-12-19 12:24:10",
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
                        "activeUser":143271,
                        "newUser":1055,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png"
                    },
                    {
                        "id":3,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
                        "owner":"吴加好",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":6,
                        "percent":117,
                        "like":820,
                        "message":833,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"Ant Design",
                        "updatedAt":"1980-09-01 13:37:36",
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
                        "activeUser":116002,
                        "newUser":1384,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
                    },
                    {
                        "id":4,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
                        "owner":"周星星",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":88,
                        "percent":141,
                        "like":409,
                        "message":923,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"Ant Design Pro",
                        "updatedAt":"2010-05-17 10:08:51",
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
                        "activeUser":192680,
                        "newUser":1560,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"
                    },
                    {
                        "id":5,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
                        "owner":"林东东",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":287,
                        "percent":768,
                        "like":113,
                        "message":683,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"Bootstrap",
                        "updatedAt":"2004-09-06 11:18:32",
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
                        "activeUser":147425,
                        "newUser":1193,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"
                    },
                    {
                        "id":6,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
                        "owner":"付小小",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":803,
                        "percent":689,
                        "like":203,
                        "message":556,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"React",
                        "updatedAt":"1995-11-03 23:18:47",
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
                        "activeUser":186183,
                        "newUser":1647,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
                    },
                    {
                        "id":7,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
                        "owner":"付小小",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":751,
                        "percent":615,
                        "like":57,
                        "message":979,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"Vue",
                        "updatedAt":"1994-09-14 13:15:14",
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
                        "activeUser":155115,
                        "newUser":1765,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png"
                    },
                    {
                        "id":8,
                        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
                        "owner":"付小小",
                        "content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                        "star":509,
                        "percent":610,
                        "like":193,
                        "message":150,
                        "description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                        "href":"https://ant.design",
                        "title":"Webpack",
                        "updatedAt":"2003-03-19 22:02:31",
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
                        "activeUser":192222,
                        "newUser":1131,
                        "cover":"https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
                    }
                ],
            }
        },
        mounted () {
            setTimeout(()=> this.loading = false,1000);
        },
        filters: {
            fromNow (date) {
                return moment(date).fromNow()
            }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
	.ant-pro-pages-account-projects-cardList {
		margin-top: 24px;

		.ant-card-meta-title {
			margin-bottom: 4px;
		}

		.ant-card-meta-description {
			height: 44px;
			overflow: hidden;
			line-height: 22px;
		}

		.cardItemContent {
			display: flex;
			height: 20px;
			margin-top: 16px;
			margin-bottom: -4px;
			line-height: 20px;

			> span {
				flex: 1 1;
				color: rgba(0,0,0,.45);
				font-size: 12px;
			}

			.ant-pro-avatar-list {
				flex: 0 1 auto;
			}
		}
	}
</style>
