import axios from 'axios';
const url = 'http://jsonplaceholder.typicode.com/todos/1';
const { data } = await axios.get('/user?ID=12345');
console.log(data);
// axios.get(url).then((response) => {
//   console.log(response.data);
// });
