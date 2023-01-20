import api from "./apiConfig";

export const getChampions = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getChampion = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createChampion = async (championData) => {
  try {
    const response = await api.post("/", championData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteChampion = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// export const updateChampions = async (name, championData) => {
//   try {
//     const response = await api.put(`/champions/${name}`, championData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

