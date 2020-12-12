const baseURL = 'https://thinkful-list-api.herokuapp.com/lorenzoclemons/bookmarks';

const apiFetch = function (...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };
  
  const getBookmark = function () {
    return apiFetch(`${baseURL}`);
  };
  
  const deleteBookmark = function (id) {
    return apiFetch(`${baseURL}/${id}`, {
      method: 'DELETE'
    });
  };
  
  function updateBookmark(id, updateDataArg) {
    const updateData = JSON.stringify(updateDataArg);
    return apiFetch(`${baseURL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: updateData,
    });
  }
  
  function createBookmark(bookmark) {
    return apiFetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: bookmark,
    });
  }
  
  export default {
    getBookmark,
    createBookmark,
    updateBookmark,
    deleteBookmark,
  };