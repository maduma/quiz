export default {
    data() {
        return {
            debug: false
        }
    },
    props: ['section', 'reveal', 'question'],
    computed : {
        sectionBullet() {
            return "'" + this.section + "." + this.question.id + " '"
        },
        succeed() {
            return checkAnswer(this.question)
        }
    },
    template: `
<div class="question">
    <ul :style="{ 'list-style-type': sectionBullet }">
        <li class="question-title">
            <span  v-if="reveal">
                <span class="correct-answer" v-if="succeed">&#10003;</span>
                <span class="bad-answer" v-else>X</span>
            </span>
            {{ question.q }}
        </li>   
    </ul>
    <ul class="question-list">
        <li v-for="a in question.a">
        <input v-model="a.selected" type="checkbox"/>
            <span v-if="reveal">
                <span class="correct-answer" v-if="a.correct"> &#10003;</span>
            </span>
            {{ a.title }}
            </li>
    </ul>
    <pre v-if="debug">{{ question }}</pre>
</div>
`
}