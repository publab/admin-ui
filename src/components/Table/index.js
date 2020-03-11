import T from 'ant-design-vue/es/table/Table'

export default {
    name: 'STable',
    data () {
        return {

        }
    },
    props: Object.assign({},T.props,{

    }),
    watch: {

    },
    created () {

    },
    methods: {

    },
    render(){
        const props = {}

        const table = (
            <a-table {...{props}}>
            </a-table>
        )

        return (
            <div class="table-wrapper">
                { table }
            </div>
        )
    }
}
