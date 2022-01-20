import React from 'react'

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    console.log(change);
    if (change.key === "TODOS_V1") {
      console.log("hubo cambios en TODO_V1");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow
  }  
}

export { useStorageListener };
