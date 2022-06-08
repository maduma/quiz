function parseCorrectAnswers(data) {
    const regex = /^(\d+)(\s+.*)$/
    data.forEach(element => {
        const found = element.q.trim().match(regex)
        element.id = '?'
        if (found != null && found.length) {
            element.id = found[1]
            element.q = found[2]
        }
        element.a = element.a.map( e => {
            const str = e.trim()
            if (str.slice(0,3) == "<+>") {
                return { title: str.slice(4), correct: true , checked: false}
            } else {
                return { title: str, correct: false, checked: false }
            }
        })
    });
    return data
}

async function getData(url) {
    const response = await fetch(url);
    const yaml = await response.text()
    const data = jsyaml.load(yaml)
    return parseCorrectAnswers(data)
}

// window.onload = async function() {
//     const questions = await getData("/data/cotier_fr/questions_legislation_generalites.yaml")
//     console.log(questions)
// };