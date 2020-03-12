import T from 'ant-design-vue/es/table/Table'

export default {
    name: 'STable',
    data () {
        return {

        }
    },
    props: Object.assign({},T.props,{
        rowKey: {
            type: [String, Function],
            default: 'id'
        },
    }),
    watch: {

    },
    created () {
        // this.loadDate(this.pagination);
    },
    methods: {
        loadDate(pagination = {}, filters = {}, sorter = {}){
            // axios.post('system/develop/role',{
            //     page: pagination.current || 1,
            //     pageSize: this.pagination.pageSize,
            //     sortField: sorter.field,
            //     sortOrder: sorter.order,
            //     ...filters,
            // }).then((response) => {
            //
            //     if(!response.status){
            //         return this.$message.error(response.message);
            //     }
            //     this.data = response.data;
            //
            // });
        }
    },
    render(createElement){

        window.console.log('-------------------');

        const props = {}

        Object.keys(T.props).forEach(k => {
            props[k] = this[k]
        })
window.console.log(props);
window.console.log(T.props);
        const table = (
            <a-table {...{props, scopedSlots: { ...this.$scopedSlots }}} onChange={this.loadDate}></a-table>
        )

        return table
    }
}
