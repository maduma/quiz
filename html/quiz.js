function parseCorrectAnswers(data) {
    data.forEach(element => {
        element.resp_list = element.resp_list.map( e => {
            const str = e.trim()
            if (str.slice(0,3) == "<+>") {
                return { title: str.slice(4), correct: true }
            } else {
                return { title: str, correct: false }
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