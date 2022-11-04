import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://genius-car-dbserver.vercel.app/orders?email=${user.email}`, {
      headers: {
        authorization: `Bearar ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      `Are you sure, you want to cancel this order`
    );
    if (proceed) {
      fetch(`https://genius-car-dbserver.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("deleted successfully");
            const rest = orders.filter((odr) => odr._id !== id);
            setOrders(rest);
          }
        });
    }
  };

  const handleUpdated = (id) => {
    fetch(`https://genius-car-dbserver.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          const rest = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const result = [approving, ...rest];
          setOrders(result);
        }
      });
  };

  return (
    <div className="py-20">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                </label>
              </th>
              <th>Services Name</th>
              <th>User Info</th>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Order
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleUpdated={handleUpdated}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
