export default {
    props: ['section', 'id', 'title', 'resp_list'],
    computed : {
        sectionBullet() {
            return "'" + this.section + "." + this.id + " '"
        }
    },
    template: `
<div style="width: 800px; margin: 10px; padding: 15px; border: 1px solid grey">
        <ul :style="{ margin: '0px', padding: '0 0 0 30px', 'list-style-type': sectionBullet }">
            <li style="font-weight: bolder">{{ title }}</li>
        </ul>
        <ul>
            <li v-for="resp in resp_list">
                {{ resp }}
                {{ resp.answer }}<span v-if="resp.valid">✓</span>
            </li>
        </ul>
    </div>
`
}