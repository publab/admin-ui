import T from 'ant-design-vue/es/table/Table'

export default {
    name: 'STable',
    data () {
        return {
            dataSourceLocal: [],
            paginationLocal: {
                pageSize: 10
            },
        }
    },
    props: Object.assign({},T.props,{
        dataUrl: {
            type: [String],
            required: true
        },
        rowKey: {
            type: [String, Function],
            default: 'id'
        },
    }),
    watch: {

    },
    created () {
        this.loadDate(this.pagination);
    },
    methods: {
        loadDate(pagination = {}, filters = {}, sorter = {}){
            axios.post(this.dataUrl,{
            }).then((response) => {

                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.dataSourceLocal = response.data;
                this.paginationLocal = {
                    total: response.meta.total,
                    pageSize: response.meta.per_page,
                    ...pagination,
                };
            });
        }
    },
    render(createElement){

        const props = {};
        const localKeys = Object.keys(this.$data)

        Object.keys(T.props).forEach(k => {
            const localKey = `${k}Local`;
            if (localKeys.includes(localKey)) {
                props[k] = this[localKey]
            }else{
                this[k] && (props[k] = this[k])
            }
            return props[k]
        })

        return (
            <a-table {...{props, scopedSlots: { ...this.$scopedSlots }}} onChange={this.loadDate}></a-table>
        )
    }
}
