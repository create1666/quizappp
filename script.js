const quizContainer = document.querySelector("quiz");
const submitButton = document.querySelector("submit");
const resultContainer = document.querySelector("result");

function quiz(){
    const output = [];
    vanillaQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const options = [];

            for(option in currentQuestion.options){
                options.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${option}"> 
                    ${option} : ${currentQuestion.options[option]}
                    </label>`
                )
            }
        }
    )
}

function showResult(){}

//display quiz
quiz();

//on submit - show results
submitButton.addEventListener("click", showResult);

const vanillaQuestions = [
    {
      question: "which is an animal?",
      options: {
          a: "Apple-pen",
          b: "Mongodb",
          c: "Elephant"
      } ,
      correctOption: "c"
    } ,
    {
        question: "which is the appropriate naming?",
        options: {
            a: "Rona",
            b: "Covid19",
            c: "Kovik1-9"
        } ,
        correctOption: "b"
    },
    {
        question: "who is sinzu?",
        options: {
            a: "Abacha",
            b: "Buhari",
            c: "indaboski"
        } ,
        correctOption: "b"
    },
    {
        question: "facebook was founded by?",
        options: {
            a: "Mark Zuckerberg",
            b: "Brendan Eich",
            c: "zuka-baba"
        } ,
        correctOption: "a"
    },
    {
        question: "The Sound OF Music was released when?",
        options: {
            a: "April 9, 2012",
            b: "March 2, 1965",
            c: "July 8, 1960"
        } ,
        correctOption: "b"
    }
];