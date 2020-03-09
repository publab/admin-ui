import { DEVICE_TYPE } from '@/utils/device'
import { mapState } from 'vuex'

export const mixinApp = {
    computed: {
        ...mapState({
            device: state => state.app.DEVICE,
            navtheme: state => state.app.NAVTHEME,
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
