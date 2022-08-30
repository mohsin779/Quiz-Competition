import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link className="btn" to="/question">
        Start Quiz
      </Link>
    </>
  );
};
export default Home;
