import { DEVICE_TYPE } from '@/plugins/device'
import { mapState } from 'vuex'

export const mixinApp = {
    computed: {
        ...mapState({
            device: state => state.app.DEVICE,
            navtheme: state => state.app.NAVTHEME,
            layout: state => state.app.LAYOUT,
            multitab: state => state.app.MULTITAB,
        }),
        isMobile(){
            return  this.device == DEVICE_TYPE.MOBILE
        },
        isDesktop(){
            return  this.device == DEVICE_TYPE.DESKTOP
        },
    },
    methods: {

    }
}
