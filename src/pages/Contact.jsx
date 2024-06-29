import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl">Contact Page</h1>
      <p className="w-96 my-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ipsam
        eius totam vel a reiciendis aperiam deserunt eaque non, itaque odit
        ullam. Sequi, inventore voluptatibus. Architecto blanditiis itaque
        accusantium ullam?
      </p>
      <Link className="btn btn-primary mt-2" to="/">
        Go Home
      </Link>
    </div>
  );
}

export default Contact;
