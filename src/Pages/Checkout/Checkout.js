import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { title, price, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaced = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.fname.value} ${form.lname.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unRegistered";
    const textarea = form.textarea.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      phone,
      email,
      textarea,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("placed success");
          form.reset();
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-20">
      <div className="mb-5">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-2xl mt-1 text-red-500">Price: {price}</p>
      </div>
      <form onSubmit={handlePlaced}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            placeholder="email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <textarea
          name="textarea"
          className="textarea textarea-bordered w-full mt-4"
          placeholder="Your message"
        ></textarea>

        <input className="btn mt-4" type="submit" value="Place to order" />
      </form>
    </div>
  );
};

export default Checkout;
