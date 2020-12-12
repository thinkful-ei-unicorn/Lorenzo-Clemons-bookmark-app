import $ from 'jquery';

import 'normalize.css';
import './index.css';

import book from './bookmark-list';
import api from './api';
import store from './store';



//fetching bookmarks from api and adding them to the store array
const main = function () {
  api.getBookmark()
    .then((items) => {
      items.forEach((item) => store.addBookmark(item));
      items.forEach((item) => item.expanded = false);
      book.render();
    });
  book.bindEventListeners();
  book.render();
};

$(main);