import React, { useState } from "react";
import Add from "./Add";
import { userRows } from "../Data";

const PAGE_SIZE = 5;

const Users = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(userRows.length / PAGE_SIZE);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const getPageRows = () => {
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return userRows.slice(startIndex, endIndex);
  };

  return (
    <div className="container mx-auto py-8">
      <div className=" text-center py-4">
        <h1 className="text-4xl text-white">Users</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-[#21295c]">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Avatar</th>
              <th className="px-4 py-2">First name</th>
              <th className="px-4 py-2">Last name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Verified</th>
            </tr>
          </thead>
          <tbody>
            {getPageRows().map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">
                  <img
                    src={row.img || "/noavatar.png"}
                    alt=""
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{row.firstName}</td>
                <td className="px-4 py-2">{row.lastName}</td>
                <td className="px-4 py-2">{row.email}</td>
                <td className="px-4 py-2">{row.phone}</td>
                <td className="px-4 py-2">{row.createdAt}</td>
                <td className="px-4 py-2">{row.verified ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="px-4 py-2  rounded-md bg-gray-200  text-[#21295c]
         "
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2  rounded-md bg-gray-200  text-[#21295c]"
        >
          Next
        </button>
      </div>
      {open && <Add slug="user" setOpen={setOpen} />}
    </div>
  );
};

export default Users;
