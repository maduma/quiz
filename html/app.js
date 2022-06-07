const { createApp } = Vue
import QuestionList from './QuestionList.js'

const app = createApp({})

app.component('QuestionList', QuestionList)
app.mount("#app")