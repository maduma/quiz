export default {
    props: ['section', 'id', 'title', 'resp_list', 'reveal'],
    computed : {
        sectionBullet() {
            return "'" + this.section + "." + this.id + " '"
        }
    },
    template: `
<div class="question">
    <ul :style="{ 'list-style-type': sectionBullet }">
        <li class="question-title">{{ title }}</li>
    </ul>
    <ul>
        <li v-for="resp in resp_list">
            {{ resp.title }}<input type="checkbox"/>
            <span v-if="reveal">
                <span class="correct-answer" v-if="resp.correct">✓</span>
            </span>
            </li>
    </ul>
</div>
`
}