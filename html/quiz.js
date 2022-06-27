const correctMark = '<+>'

// should return a prommise to handle error during parssing
function parseCorrectAnswers(data) {
    const regex = /^(\d+)(\s+.*)$/
    let nbr = 0
    data.forEach(element => {
        nbr++
        if (element.q == undefined) {
            throw Error("Missing question title, check around question " + nbr)
        }
        if (element.a == undefined) {
            throw Error("Missing answers, check around question " + nbr)
        }
        const found = element.q.trim().match(regex)
        element.id = '#'
        if (found != null && found.length) {
            element.id = found[1]
            element.q = found[2]
        }
        element.a = element.a.map( e => {
            const str = String(e).trim()
            if (str.slice(0,3) == correctMark) {
                return { title: str.slice(4), correct: true , selected: false}
            } else {
                return { title: str, correct: false, selected: false }
            }
        })
        element.a = shuffle(element.a)
    });
    return shuffle(data)
}

function checkAnswer(question) {
    for (let i=0; i < question.a.length; i++) {
        if (question.a[i].correct !=  question.a[i].selected) {
            question.succeed = false
            return false
        }
    }
    question.succeed = true
    return question.succeed
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

async function getData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw Error(response.status + " " + response.statusText)
    }
    const yaml = await response.text()
    const data = jsyaml.load(yaml)
    return parseCorrectAnswers(data)
}

// window.onload = async function() {
//     const questions = await getData("/data/cotier_fr/questions_legislation_generalites.yaml")
//     console.log(questions)
// };