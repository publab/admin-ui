import { DEVICE_TYPE } from '@/utils/device'
import { mapState } from 'vuex'

export const mixinDevice = {
    computed: {
        ...mapState({
            device: state => state.app.DEVICE
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
