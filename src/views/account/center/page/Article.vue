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
        <a-icon type="star-o" :text="item.star" />
        <a-icon type="like-o" :text="item.like" />
        <a-icon type="message" :text="item.message" />
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
      loadingMore: false,
      data: []
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
