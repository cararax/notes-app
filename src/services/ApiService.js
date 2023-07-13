import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/notes';

const ApiService = {
  async publishNote(note) {
    const response = await axios.post(`${API_BASE_URL}`, note);
    return response.data;
  },

  async getPublicNotes() {
    const response = await axios.get(`https://ovonjk.free.beeceptor.com/todos`);
    return response.data;
  },

};

export default ApiService;
