import OuButton from '../components/unit/ouButton'
import OuInput from '../components/unit/ouInput'
import Rate from '../components/unit/rate'
import LoginBox from '../components/unit/loginBox'
import CodeLoginBox from '../components/unit/codeloginBox'
import RegisterBox from '../components/unit/registerBox'
import RowTable from '../components/unit/rowTable'
import ClassicTable from '../components/unit/ClassicTable'
import ClassicForm from '../components/unit/ClassicForm'
export default (Vue) => {
  Vue.component('OuButton', OuButton)
  Vue.component('OuInput', OuInput)
  Vue.component('Rate', Rate)
  Vue.component('LoginBox', LoginBox)
  Vue.component('CodeLoginBox', CodeLoginBox)
  Vue.component('RegisterBox', RegisterBox)
  Vue.component('RowTable', RowTable)
  Vue.component('ClassicTable', ClassicTable)
  Vue.component('ClassicForm', ClassicForm)
}
