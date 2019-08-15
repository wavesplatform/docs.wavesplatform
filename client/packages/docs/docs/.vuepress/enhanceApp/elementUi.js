import {
    Select,
    Button,
    Popover,
    Breadcrumb,
    BreadcrumbItem,
    Alert,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default async(context) => {
    const { Vue } = context;

    Vue.component(Select.name, Select)
    Vue.component(Button.name, Button)
    Vue.component(Popover.name, Popover)
    Vue.component(Breadcrumb.name, Breadcrumb)
    Vue.component(BreadcrumbItem.name, BreadcrumbItem)
    Vue.component(Alert.name, Alert)
}
