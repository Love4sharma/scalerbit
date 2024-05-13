import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faSortUp,
  faSortDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { products } from "../Data";

const PAGE_SIZE = 5;

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    color: "",
    price: "",
    producer: "",
    inStock: "",
    img: "",
  });

  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const handleUpdate = (productId) => {
    console.log(`Update product ${productId}`);
  };

  const handleDelete = (productId) => {
    console.log(`Delete product ${productId}`);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const toggleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedProducts = () => {
    if (!sortColumn) return products;

    return products.slice().sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  };

  const getPageProducts = () => {
    const startIndex = currentPage * PAGE_SIZE;
    return sortedProducts().slice(startIndex, startIndex + PAGE_SIZE);
  };

  const renderArrowIcon = (column) => {
    if (sortColumn === column) {
      return sortDirection === "asc" ? (
        <FontAwesomeIcon icon={faSortUp} />
      ) : (
        <FontAwesomeIcon icon={faSortDown} />
      );
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    // Send new product data to backend
    console.log("New product:", newProduct);
    // Close the modal
    setShowModal(false);
    // Clear the form fields
    setNewProduct({
      title: "",
      color: "",
      price: "",
      producer: "",
      inStock: "",
      img: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-semibold mb-4">Product Table</h2>
        <button
          onClick={() => setShowModal(true)}
          className=" text-xl font-bold px-4 py-2 bg-gray-200 rounded-md text-[#21295c]"
        >
          Add Product{" "}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full ">
          <thead>
            <tr className="bg-gray-200 text-[#21295c]">
              <th className="px-4 py-2" onClick={() => toggleSort("id")}>
                ID {renderArrowIcon("id")}
              </th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2" onClick={() => toggleSort("title")}>
                Title {renderArrowIcon("title")}
              </th>
              <th className="px-4 py-2" onClick={() => toggleSort("color")}>
                Color {renderArrowIcon("color")}
              </th>
              <th className="px-4 py-2" onClick={() => toggleSort("price")}>
                Price {renderArrowIcon("price")}
              </th>
              <th className="px-4 py-2" onClick={() => toggleSort("producer")}>
                Producer {renderArrowIcon("producer")}
              </th>
              <th className="px-4 py-2" onClick={() => toggleSort("createdAt")}>
                Created At {renderArrowIcon("createdAt")}
              </th>
              <th className="px-4 py-2" onClick={() => toggleSort("inStock")}>
                In Stock {renderArrowIcon("inStock")}
              </th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getPageProducts().map((product) => (
              <tr key={product.id} className="border-b border-gray-200">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">
                  <img
                    src={product.img || "/noavatar.png"}
                    alt=""
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{product.title}</td>
                <td className="px-4 py-2">{product.color}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.producer}</td>
                <td className="px-4 py-2">{product.createdAt}</td>
                <td className="px-4 py-2">{product.inStock}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-6">
                    <button
                      onClick={() => handleUpdate(product.id)}
                      className="mr-2"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={() => handleDelete(product.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => goToPage(Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-200 rounded-md text-[#21295c]"
        >
          Previous
        </button>
        <button
          onClick={() => goToPage(Math.min(currentPage + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 bg-gray-200 rounded-md text-[#21295c]"
        >
          Next
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-[#21295c]">
            <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newProduct.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="color"
                >
                  Color
                </label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={newProduct.color}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newProduct.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="producer"
                >
                  Producer
                </label>
                <input
                  type="text"
                  id="producer"
                  name="producer"
                  value={newProduct.producer}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="inStock"
                >
                  In Stock
                </label>
                <input
                  type="number"
                  id="inStock"
                  name="inStock"
                  value={newProduct.inStock}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="image"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={newProduct.image}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleAddProduct}
                  className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
