const getTopTwentyData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20');
};

const deletRow = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
};

const editRow = (id, obj) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
export { getTopTwentyData, deletRow, editRow };
