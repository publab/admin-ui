import T from 'ant-design-vue/es/table/Table'

export default {
    name: 'STable',
    data () {
        return {
            items: [{name: 'duan'}]
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
    render(createElement){

        if (this.items.length) {
            return createElement('ul', this.items.map(function (item) {
                return createElement('li', item.name)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
        //
        // const props = {}
        //
        // const table = (
        //     <a-table {...{props}}>
        //     </a-table>
        // )
        //
        // return (
        //     <div class="table-wrapper">
        //         { table }
        //     </div>
        // )
    }
}
