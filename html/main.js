
var quiz_questions

async function getData(url) {
    const response = await fetch(url);
    const yaml = await response.text()
    const data = jsyaml.load(yaml)
    return data
}

window.onload = async function() {
    const quiz_questions = await getData("/data/cotier_fr/questions_legislation_generalites.yaml")
    const debug = document.getElementById("debug")
    debug.innerHTML = JSON.stringify(quiz_questions, null, 2)
};