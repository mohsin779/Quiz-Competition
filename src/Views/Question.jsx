import { RadioGroup, RadioButton } from "react-radio-buttons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Question = () => {
  const questions = [
    {
      question: "Is Udemy the best online learning platform?",
      answers: [
        { option: "For Sure!", answer: true },
        { option: "No, not at all.", answer: false },
      ],
    },
    // {
    //   question: "کیا ہیگزا والوں کو اس ہفتے پیٹرول کا کارڈ مل جائے گا؟",
    //   answers: [
    //     { option: "بلکل بھی نہیں۔", answer: true },
    //     { option: "جی ہاں۔", answer: false },
    //   ],
    // },
    {
      question: "کیا ذیشان بھائی آج کل جم جا رہے ہیں؟",
      answers: [
        { option: "کبھی کبار۔", answer: true },
        { option: "جی ہاں۔", answer: false },
      ],
    },
    {
      question: "What is better if you wish to achieve success?",
      answers: [
        { option: "Hard Work", answer: false },
        { option: "Smart Work", answer: true },
      ],
    },
    {
      question: "Complete the phrase: Time and ___ wait for none.",
      answers: [
        { option: "Batman", answer: false },
        { option: "Tide", answer: true },
      ],
    },
  ];
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [usersAnswers, setUsersAnswers] = useState([]);

  const onNext = () => {
    setSelectedAnswer("");
    if (index < questions.length - 1) {
      setIndex(index + 1);
    }
    let temp = [...usersAnswers, selectedAnswer];
    setUsersAnswers(temp);

    setCurrentQuestion(currentQuestion + 1);
  };
  const onPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setSelectedAnswer(usersAnswers.pop());
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const done = (ans) => {
    setSelectedAnswer(ans);
  };

  return (
    <div className="container">
      <div
        className={currentQuestion === questions.length ? "hide" : "content"}
        id="question-area"
      >
        <div id="question-text">
          <b>
            <span style={{ fontSize: "20px" }}>Q</span>
            {index + 1}/{questions.length}:<span> </span>
          </b>
          {questions[index].question}
        </div>
        <br />

        <div className="options">
          <RadioGroup onChange={done}>
            {questions[index].answers.map((answer, i) => {
              return (
                <RadioButton
                  key={i}
                  value={answer.option}
                  checked={selectedAnswer === answer.option}
                >
                  {answer.option}
                </RadioButton>
              );
            })}
          </RadioGroup>
        </div>
      </div>
      <div className="controls">
        <button
          className={
            currentQuestion === questions.length ? "hide" : "btn btn-next"
          }
          id="next"
          onClick={onPrev}
          disabled={currentQuestion === questions.length ? true : false}
        >
          Prev
        </button>
        <button
          className={
            currentQuestion === questions.length ? "hide" : "btn btn-next"
          }
          id="next"
          onClick={onNext}
          disabled={currentQuestion === questions.length ? true : false}
        >
          Next
        </button>

        <Link
          className={currentQuestion === questions.length ? "btn" : "hide"}
          to="/result"
          state={{
            usersAnswers: usersAnswers,
            questions: questions,
          }}
        >
          Show Result
        </Link>
      </div>
    </div>
  );
};
export default Question;
