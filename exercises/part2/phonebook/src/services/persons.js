import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUrl).then(({ data }) => data);
};

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then(({ data }) => data);
};

const update = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson).then(({ data }) => data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then(({ data }) => data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove };
