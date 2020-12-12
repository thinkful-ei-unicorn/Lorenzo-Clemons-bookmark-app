import book from "./bookmark-list";

const store = {
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0
};


const findById = function (id) {
  return store.bookmarks.find(currentItem => currentItem.id === id);
};

function findAndUpdate(id, newData) {
  const updateItem = store.bookmarks.find(item => item.id === id);
  Object.assign(updateItem, newData);
}

const addBookmark = function (item) {
  book.expanded=false;
  store.bookmarks.push(item);
};

function toggleExpand(id) {
  let foundItem = findById(id);
  foundItem.expanded = !foundItem.expanded;
}

const setError = function (error) {
  store.error = error;
};

const findAndDelete = function (id) {
  store.bookmarks = store.bookmarks.filter(bookmarks => bookmarks.id !== id);
};

export default {
  store,
  findById,
  addBookmark,
  findAndUpdate,
  findAndDelete,
  setError,
  toggleExpand,
};