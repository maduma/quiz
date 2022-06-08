export default {
    props: ['section', 'id', 'q', 'a', 'reveal'],
    computed : {
        sectionBullet() {
            return "'" + this.section + "." + this.id + " '"
        }
    },
    template: `
<div class="question">
    <ul :style="{ 'list-style-type': sectionBullet }">
        <li class="question-title">{{ q }}</li>
    </ul>
    <ul class="question-list">
        <li v-for="e in a">
            <input type="checkbox"/>
            <span v-if="reveal">
                <span class="correct-answer" v-if="e.correct"> &#10003;</span>
            </span>
            {{ e.title }}
            </li>
    </ul>
</div>
`
}