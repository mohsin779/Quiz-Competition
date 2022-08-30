import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Result = (props) => {
  const location = useLocation();
  const { usersAnswers, questions } = location.state;
  let score = 0;

  const correctAnswers = questions.map((que) => {
    return que.answers.filter((ans) => {
      return ans.answer === true;
    });
  });
  correctAnswers.forEach((answer, i) => {
    if (answer[0].option === usersAnswers[i]) {
      score++;
    }
  });

  return (
    <>
      <h1>Your Score: {score} </h1>
      <Link className="btn" to="/question" state={{ score: score }}>
        Retake Quiz
      </Link>
    </>
  );
};

export default Result;
