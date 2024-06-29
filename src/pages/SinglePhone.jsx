import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SinglePhone() {
  const { id } = useParams();

  const [phone, setPhone] = useState(null);

  useEffect(() => {
    fetch(
      `https://online-json-server-api.up.railway.app/project/6676aaa81d2cd3eb1143dbaa/articles/${id}`
    )
      .then((data) => data.json())
      .then((phone) => setPhone(phone))
      .catch((error) => console.log(error));
  }, []);
  console.log(phone);
  return (
    <div className="grid place-content-center">
      {phone && (
        <div key={phone.id} className="p-4 rounded-lg bg-base-200">
          <img className="w-[200px] h-[150px]" src={phone.img[0]} alt="" />
          <h1 className="text-2xl font-bold my-4">{phone.title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-[18px] font-medium">Price: {phone.price}</p>
            <p className="text-[18px] font-medium">{phone.rating}</p>
          </div>
          <div className="flex justify-between items-center my-4">
            <Link className="btn btn-primary" to="/">
              Go home
            </Link>
            <Link className="btn btn-accent" to="#">
              Buy now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default SinglePhone;
