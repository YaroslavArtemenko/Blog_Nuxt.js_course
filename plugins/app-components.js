import Vue from 'vue'

//UI
import Intro from "@/components/UI/Intro";
import Message from "@/components/UI/Message";
import PostsList from "@/components/blog/PostsList";

//Controls
import AppButton from "@/components/UI/Controls/Button";
import AppInput from "@/components/UI/Controls/Input";
import AppTextArea from "@/components/UI/Controls/TextArea";

//UI
Vue.component('Message', Message)
Vue.component('Intro', Intro)
Vue.component('PostsList', PostsList)


//Controls
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)

