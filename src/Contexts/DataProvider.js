import React, { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../Data/Data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [menuItem, setMenuItem] = useState([]);
  const [menu, setMenu] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [searchArr, setSearchArr] = useState();
  const [checkBox, setCheckBox] = useState({ spicy: false, veg: false });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/menu");

      setMenuItem(response.data.menu);
      setMenu(response.data.menu);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  const HandleSearch = (event) => {
    const currValue = event.target.value;
    setSearchValue(currValue);
    const SearchedArray = menu.filter(({ name }) =>
      name.toLowerCase().includes(currValue.toLowerCase())
    );
    setMenuItem(SearchedArray);
    setSearchArr(SearchedArray);
  };

  const HandleSort = (event) => {
    setMenuItem(() =>
      [...menuItem].sort((a, b) =>
        event.target.value === "LowToHigh"
          ? a.price - b.price
          : b.price - a.price
      )
    );
  };

  // HANDLING CHECKBOX VALUES
  const HandleCheckVeg = (event) => {
    const isChecked = event.target.checked;
    setCheckBox({ ...checkBox, veg: isChecked });
    let vegData;
    if (searchValue) {
      vegData = menuItem.filter(({ is_vegetarian }) => is_vegetarian);
    } else {
      vegData = menu.filter(({ is_vegetarian }) => is_vegetarian);
    }

    if (isChecked) {
      if (checkBox.spicy) {
        setMenuItem([...menuItem, ...vegData]);
      } else {
        setMenuItem(vegData);
      }
    } else {
      if (checkBox.spicy) {
        setMenuItem(() =>
          menuItem.filter(({ is_vegetarian }) => !is_vegetarian)
        );
      } else {
        if (searchValue) {
          setMenuItem(searchArr);
        } else {
            setMenuItem(menu);
        }
      }
    }
  };


  const HandleCheckSpicy = (event) => {
    const isChecked = event.target.checked;
    setCheckBox({ ...checkBox, spicy: isChecked });
    let spicyData;
    if (searchValue) {
      spicyData = menuItem.filter(({ is_spicy }) => is_spicy);
    } else {
      spicyData = menu.filter(({ is_spicy }) => is_spicy);
    }
    if (isChecked) {
      if (checkBox.veg) {
        setMenuItem([...menuItem, ...spicyData]);
      } else {
        setMenuItem(spicyData);
      }
    } else {
      if (checkBox.veg) {
        setMenuItem(() => menuItem.filter(({ is_spicy }) => !is_spicy));
      } else {
        if (searchValue) {
          setMenuItem(searchArr);
        } else {
          setMenuItem(menu);
        }
      }
    }
  };
  // HANDLING CART DATA
  const HandleCart = (itemId) => {
    const cartData = menu.map((element) =>
      element.id === itemId ? { ...element, inCart: true } : element
    );
    setMenuItem(cartData);
    setMenu(cartData);
  };
  const RemoveFromCart = (itemId) => {
    const RemoveCartData = menu.map((element) =>
      element.id === itemId ? { ...element, inCart: false } : element
    );
    setMenuItem(RemoveCartData);
    setMenu(RemoveCartData);
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
        HandleSearch,
        searchValue,
        HandleSort,
        HandleCheckSpicy,
        HandleCheckVeg,
        HandleCart,
        RemoveFromCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
