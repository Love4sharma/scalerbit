import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { orderRows } from "../Data";

const PAGE_SIZE = 5;

const OrderTable = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [abandonedCarts, setAbandonedCarts] = useState([]);

  const totalPages = Math.ceil(orderRows.length / PAGE_SIZE);
  const [title, settitle] = useState("");
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const getPageRows = () => {
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return orderRows.slice(startIndex, endIndex);
  };

  const viewOrderDetails = (order) => {
    settitle("Orders");
    setSelectedOrder(order);
    setOpen(true);
  };

  const sendAbandonedCartEmail = () => {
    // Filter orders with incomplete payments (abandoned carts)
    const abandoned = orderRows.filter((order) => order.status === "Pending");
    settitle("Abandoned Cart");
    setAbandonedCarts(abandoned);
    setSelectedOrder(null); // Set selectedOrder to null
    setOpen(true);
  };
  const closeModal = () => {
    settitle("");
    setAbandonedCarts([]);
    setSelectedOrder([]);
    setOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="text-center py-4">
        <h1 className="text-4xl text-white">Orders</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-[#21295c]">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getPageRows().map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.customer}</td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.amount}</td>
                <td className="px-4 py-2">{row.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => viewOrderDetails(row)}
                    className=" rounded-md"
                  >
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-200 text-[#21295c] rounded-md"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 bg-gray-200 text-[#21295c] rounded-md"
        >
          Next
        </button>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={sendAbandonedCartEmail}
          className="px-4 py-2 bg-gray-200 text-[#21295c] rounded-md"
        >
          Abandoned Carts
        </button>
      </div>
      {open && (
        <Modal
          title={title}
          order={selectedOrder}
          closeModal={closeModal}
          abandonedCarts={abandonedCarts}
        />
      )}
    </div>
  );
};

const Modal = ({ title, order, closeModal, abandonedCarts }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg text-[#21295c]">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        {order && order.id !== "" && (
          <div>
            <p>ID: {order.id}</p>
            <p>Customer: {order.customer}</p>
            <p>Date: {order.date}</p>
            <p>Amount: {order.amount}</p>
            <p>Status: {order.status}</p>
            {/* Additional order details */}
          </div>
        )}
        {abandonedCarts.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mt-4">Abandoned Carts</h3>
            <ul className="list-disc pl-6">
              {abandonedCarts.map((cart) => (
                <li key={cart.id}>{cart.customer}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderTable;
