import T from 'ant-design-vue/es/table/Table'

export default {
    name: 'STable',
    data () {
        return {
            dataSourceLocal: [],
            paginationLocal: Object.assign({
                pageSize: 10
            }, this.pagination),
            formData: {},
            filterData: {},
            loadingLocal: false
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
        this.loadData();
    },
    methods: {
        setFormSearch(where = {}){
            this.formData = where;
            this.loadData();
        },
        setFilters(pagination = {}, filters = {}, sorter = {}){
            this.filterData = filters;
            this.loadData(pagination,sorter);
        },
        loadData(pagination = {}, sorter = {}){
            this.loadingLocal = true;
            this.axios.post(this.dataUrl,{
                page: pagination.current || 1,
                pageSize: this.paginationLocal.pageSize,
                sort:{
                    field: sorter.field,
                    type: sorter.order == 'ascend' ? 'AES' : 'DESC',
                },
                data: {
                    ...this.formData,
                    ...this.filterData
                }
            }).then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.dataSourceLocal = response.data;
                this.paginationLocal = Object.assign(pagination,{
                    total: response.meta.total,
                    pageSize: response.meta.per_page,
                    current: response.meta.current_page,
                });
            }).catch((error) => {
                window.console.log(error)
            }).finally(() => {
                this.loadingLocal = false;
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
            <a-table {...{props, scopedSlots: { ...this.$scopedSlots }}} onChange={this.setFilters}></a-table>
        )
    }
}
