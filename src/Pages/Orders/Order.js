import React, { useEffect, useState } from "react";

const Order = ({ order, handleDelete, handleUpdated }) => {
  const { _id, serviceName, price, email, phone, customer, service, status } =
    order;
  const [ordersService, setOrdersService] = useState({});

  useEffect(() => {
    fetch(`https://genius-car-dbserver.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrdersService(data));
  }, [service]);

  return (
    <>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-ghost text-red-500 text-xl"
            >
              X
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                {ordersService?.img && (
                  <img
                    src={ordersService?.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{price}$</div>
            </div>
          </div>
        </td>
        <td>
          {customer}
          <br />
          <span className="badge badge-ghost badge-sm">{phone}</span>
        </td>
        <td>{email}</td>
        <th>
          <button
            onClick={() => handleUpdated(_id)}
            className="btn btn-ghost btn-xs"
          >
            {status ? (
              <span className="text-green-500">{status}</span>
            ) : (
              <span className="text-red-500">Pending</span>
            )}
          </button>
        </th>
      </tr>
    </>
  );
};

export default Order;
