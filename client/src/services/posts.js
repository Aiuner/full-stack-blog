import api from "./apiConfig";

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editPost = async (id, post) => {
  try {
    const response = await api.put(`/post/${id}`, post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await api.post("/post", post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// module.exports = {
//   getPost,
//   getPosts,
//   createPost,
//   editPost,
//   deletePost,
// };
