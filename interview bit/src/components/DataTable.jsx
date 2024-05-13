import React from "react";
import { useTable, usePagination } from "react-table";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./dt.css";

const DataTable = (props) => {
  console.log(props.column);
  const columns = React.useMemo(
    () => [
      ...props.columns,
      {
        id: "action",
        Header: "Action",
        Cell: ({ row }) => (
          <div className="flex items-center gap-7">
            <Link to={`/${props.slug}/${row.original.id}`} className="mr-2">
              <FontAwesomeIcon icon={faEye} />
            </Link>
            <div
              className="delete"
              onClick={() => handleDelete(row.original.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        ),
      },
    ],
    [props.columns, props.slug]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: props.rows,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );

  const handleDelete = (id) => {
    // Delete logic here
  };
  return (
    <div className="dataTable">
      <table
        {...getTableProps()}
        className="dataGrid w-full bg-white shadow-md rounded my-6"
      >
        <thead className="bg-gray-200 text-gray-700">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-2 px-4 border-b border-gray-300"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row); // Call prepareRow for each row
            return (
              <tr
                key={rowIndex}
                {...row.getRowProps()}
                className="text-gray-700"
              >
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td
                      key={cellIndex}
                      {...cell.getCellProps()}
                      className="py-2 px-4 border-b border-gray-300"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded mr-2"
        >
          Previous Page
        </button>{" "}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
        >
          Next Page
        </button>{" "}
        <span className="text-gray-700">
          Page{" "}
          <strong>
            {pageIndex + 1} of {Math.ceil(props.rows.length / 10)}
          </strong>{" "}
        </span>
      </div>
    </div>
  );
};

export default DataTable;
