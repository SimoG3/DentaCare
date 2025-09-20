// frontend/src/services/appointmentService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const bookAppointment = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/reservation`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
