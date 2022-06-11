const { reactive, onMounted, ref } = Vue
import Question from './Question.js'

export default {
    setup(props) {
        const questions = ref([])
        const reveal = ref(false)
        const error = ref("")

        onMounted(() => {
            getData(props.dataUrl).then(value => {
                questions.value = value
            }).catch(err => {
                console.log(err)
                error.value = err.message
            })
        })

        return {
            questions: questions,
            reveal,
            error
        } 
    },
    props: ['dataUrl', 'section', 'title'],
    components: { Question },
    template: `

<h2>{{section}} - {{ title }}</h2>
<div class="reveal-box">Vérifier les reponses <input type="checkbox" id="checkbox" v-model="reveal" /></div>
<Question :section=section :reveal=reveal :question=question v-for="question in questions"></Question>
<div class="error" v-if="error">
    <h4>Error when loading data!</h4>
    file: {{ dataUrl }}
    <pre>{{ error }}</pre>
</div>
`
}
