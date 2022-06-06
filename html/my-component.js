export default {
    data() {
        return {
            section: "A",
            id: 3,
            title: "Qui porte la responsabilité sur un navire de plaisance en ce qui concerne l'application de la réglementation maritime ?",
            resps: [
                {answer: 'Le chef de bord ou son remplaçant.', valid: true},
                {answer: 'Le chef de bord et son remplaçant', valid: false},
                {answer: 'Le chef de bord ou toute autre personne responsable', valid: false},
                {answer: 'La personne responsable de la firme charter.', valid: false}
            ]
        }
    },
    template: `
            <div style="width: 800px; margin: 20px; padding: 20px; border: 1px solid grey">
            <p style="font-weight: bolder">{{ section }}.{{ id }} {{ title }}</p>
            <ul style="list-style: inside;">
                <li style="list-style: inside;" v-for="resp in resps">
                    {{ resp.answer }}<span v-if="resp.valid">✓</span>
                </li>
            </ul>
        </div>
    `
}