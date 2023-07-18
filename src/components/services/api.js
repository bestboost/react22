import axios from 'axios';

axios.defaults.baseURL = 'https://64b6bf17df0839c97e1610a1.mockapi.io/';

export const addMaterial = async values => {
     const response = await axios.post('/materials', values);
     return response.data;
};

export const getMaterials = async () => {
     const response = await axios.get('/materials');
     return response.data;
};

export const deleteMaterials = async id => {
     const response = await axios.delete(`/materials/${id}`);
     return response.data;
}