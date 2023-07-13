const API_BASE_URL = 'http://10.0.2.2:8080/api/notes';

const ApiService = {
  async publishNote(note) {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  },

  async getPublicNotes() {
    try{
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during the API call: ', error);
    throw error;
  }
  },
};

export default ApiService;
