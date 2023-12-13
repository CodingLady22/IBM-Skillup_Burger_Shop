import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const OrderedItems = ({ id, status, item, amount, payment, action }) => (
  
    <tr>
      <td>{id}</td>
      <td>{status}</td>
      <td>{item}</td>
      <td>{amount}</td>
      <td>{payment}</td>
      <td>
        <Link to={`/order/${id}`}>
          {action}
          </Link>
      </td>
  </tr>
  
  
);


const MyOrders = () => {
  const orders = [
    {id: 1, status: 'Processing', item: 23, amount: 'Rs ₹2132', payment: 'COD', action: <AiOutlineEye />},
    {id: 2, status: 'Processing', item: 23, amount: 'Rs ₹2132', payment: 'COD', action: <AiOutlineEye />},
    {id: 3, status: 'Processing', item: 23, amount: 'Rs ₹2132', payment: 'COD', action: <AiOutlineEye />},
    {id: 4, status: 'Processing', item: 23, amount: 'Rs ₹2132', payment: 'COD', action: <AiOutlineEye />},
    {id: 5, status: 'Processing', item: 23, amount: 'Rs ₹2132', payment: 'COD', action: <AiOutlineEye />},
    {id: 6, status: 'Processing', item: 23, amount: 'Rs ₹2132', payment: 'COD', action: <AiOutlineEye />},
  ];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(orderItem => (
            <OrderedItems key={orderItem.id} 
              id={orderItem.id}
              status={orderItem.status}
              item={orderItem.item}
              amount={orderItem.amount}
              payment={orderItem.payment}
              action={orderItem.action}
            />))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
