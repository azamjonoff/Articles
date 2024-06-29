import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid place-items-center">
      <h1 className="font-bold text-2xl my-4">This is Home Page</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque
        sapiente dignissimos dolore iste? Enim distinctio repellendus deserunt
        non natus fugiat! Atque architecto harum facilis doloribus adipisci
        dicta consectetur obcaecati delectus! Quaerat sapiente at voluptate,
        minus necessitatibus earum labore sed blanditiis commodi libero ut
        consectetur nulla veniam perspiciatis laboriosam quia.
      </p>
      <Link className="btn btn-primary mt-4" to="/articles">
        Go Articles
      </Link>
    </div>
  );
}

export default Home;
