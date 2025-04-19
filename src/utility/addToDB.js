import { toast } from "react-toastify";

const getStoredBooks = () => {
  const storedBookSTR = localStorage.getItem("storedBooks");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  }
  return [];
};

const addToStoredDB = (id) => {
  const storeBookData = getStoredBooks();

  if (storeBookData.includes(id)) {
    toast.warning("📚 Already Added!", { theme: "colored" });
  } else {
    storeBookData.push(id);
    localStorage.setItem("storedBooks", JSON.stringify(storeBookData));
    toast.success("✅ Added to Read List!", { theme: "colored" });
  }
};


const removeFromStoredDB = (id) => {
    const storeBookData = getStoredBooks();
    const updatedList = storeBookData.filter((bookId) => bookId != id);
    console.log(updatedList);
    localStorage.setItem("storedBooks", JSON.stringify(updatedList));
  };


export { addToStoredDB, getStoredBooks, removeFromStoredDB };
