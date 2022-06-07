import Question from './Question.js'

export default {
    async setup() {
        const questions = await getData("/data/cotier_fr/questions_legislation_generalites.yaml")
        return { questions } 
    },
    components: { Question },
    template: `
<Question section=A v-bind=q v-for="q in questions"></Question>
`
}