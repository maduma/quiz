import Question from './Question.js'

export default {
    data() {
        return {
            checked: false
        }
    },
    async setup(props) {
        const questions = await getData(props.dataUrl)
        return {
            questions: questions
        } 
    },
    props: ['dataUrl', 'section', 'title'],
    components: { Question },
    template: `

<h2>{{section}} - {{ title }}</h2>
Vérifier les reponses <input type="checkbox" id="checkbox" v-model="checked" />
<Question :section=section :reveal=checked v-bind=q v-for="q in questions"></Question>

`
}
