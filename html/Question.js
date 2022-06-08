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
    <ul class="question-list">
        <li v-for="resp in resp_list">
            <input type="checkbox"/> {{ resp.title }}
            <span v-if="reveal">
                <span class="correct-answer" v-if="resp.correct"> &#10003;</span>
            </span>
            </li>
    </ul>
</div>
`
}