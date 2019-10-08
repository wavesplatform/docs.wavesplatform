import {
    Select,
    Button,
    Popover,
    Breadcrumb,
    BreadcrumbItem,
    Alert,
    Card,
    Divider,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Tag,
    MessageBox,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


export default async(context) => {

    const { Vue } = context;

    [
        Alert,
        Select,
        Button,
        Popover,
        Breadcrumb,
        BreadcrumbItem,
        Card,
        Divider,
        Checkbox,
        CheckboxButton,
        CheckboxGroup,
        Tag,
    ].forEach(component => {
        Vue.component(component.name, component)
    });

    // [
    //     Alert,
    // ].forEach(component => {
    //     Vue.use(component);
    // });

    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
}
