import React, { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../Data/Data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [menuItem, setMenuItem] = useState([]);
  const [filters, setFilters] = useState({
    checkBox: [],
    searchValue: "",
    sort: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/menu");

      setMenuItem(response.data.menu);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const searchMenu = (event) => {
    setFilters({ ...filters, searchValue: event.target.value });
  };
  const handleCheckbox = (type) => {
    const isTypeAlreadyPresent = filters.checkBox.find(
      (filter) => filter === type
    );
    setFilters({
      ...filters,
      checkBox: isTypeAlreadyPresent
        ? filters.checkBox.filter((filter) => filter !== type)
        : [...filters.checkBox, type],
    });
  };
  const handleSort = (type) => {
    setFilters({ ...filters, sort: type });
  };

  const vegData =
    filters.checkBox.length > 0
      ? menuItem.filter((item) =>
          filters.checkBox.every((filter) => item[filter])
        )
      : menuItem;

  const searchedData =
    filters.searchValue?.length > 0
      ? vegData.filter(
          (item) =>
            item.name
              .toLowerCase()
              .includes(filters.searchValue.toLowerCase()) ||
            item.description
              .toLowerCase()
              .includes(filters.searchValue.toLowerCase())
        )
      : vegData;

  const filteredData = filters.sort
    ? searchedData.sort((a, b) =>
        filters.sort === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
      )
    : searchedData;

  // HANDLING CART DATA
  const HandleCart = (itemId, RemoveFromCart) => {
    const cart = menuItem.map((element) =>
      element.id === itemId
        ? { ...element, inCart: RemoveFromCart ? false : true, Selected: RemoveFromCart ? 0 : 1}
        : element
    );
    setMenuItem(cart);
  };



  const HandleCartItemsQuantity = (itemId, decrease) => {
      const updatedCart = menuItem.map((cartItem) =>
        cartItem.id === itemId
          ? {
              ...cartItem,
              Selected: decrease
                ? cartItem.Selected - 1
                : cartItem.Selected + 1
            }
          : cartItem
      );
      const filterCart = updatedCart.map((menu)=> menu.id === itemId ? {...menu, inCart: menu.Selected === 0 ? false: true} : menu)
      setMenuItem(filterCart);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        menuItem,
        loading,
        error,
        filteredData,
        filters,
        searchMenu,
        handleCheckbox,
        handleSort,
        HandleCart,
        HandleCartItemsQuantity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
