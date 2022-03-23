import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    try {
      // Simulate that we are getting data from another source that will take a few time
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }, 1000)
    } catch (error) {
      setError(error);
    }

  }, [])

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {item, saveItem, loading, error};
}

export { useLocalStorage };
