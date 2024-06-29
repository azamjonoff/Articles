import { Link } from "react-router-dom";

function About() {
  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl">About Page</h1>
      <p className="w-96 my-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nisi,
        libero neque dolor voluptatibus repellendus, praesentium iusto incidunt
        ad laborum explicabo minus amet blanditiis odit id ducimus vero
        reprehenderit nam possimus repellat alias quam placeat!
      </p>
      <Link className="btn btn-primary mt-5" to="/">
        Go Home
      </Link>
    </div>
  );
}

export default About;
