import elementResizeDetectorMaker from 'element-resize-detector'
import { MessageBox } from 'element-ui'

export default (context) => {
    const { Vue, isServer } = context

    if (!isServer) {
        Vue.prototype.$elementResizeDetectorMaker = elementResizeDetectorMaker;
        // Vue.prototype.$elementResizeDetector = elementResizeDetectorMaker({
        //     strategy: 'scroll'
        // });
    }
}
