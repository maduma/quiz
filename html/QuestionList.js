const { reactive, ref } = Vue
import Question from './Question.js'

export default {
    async setup(props) {
        const questions = reactive(await getData(props.dataUrl)) 
        const checked = ref(false)
        return {
            questions: questions,
            checked
        } 
    },
    props: ['dataUrl', 'section', 'title'],
    components: { Question },
    template: `

<h2>{{section}} - {{ title }}</h2>
<div class="reveal-box">Vérifier les reponses <input type="checkbox" id="checkbox" v-model="checked" /></div>
<Question :section=section :reveal=checked v-bind=q v-for="q in questions"></Question>

`
}
