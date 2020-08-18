import api from './apiConfig'

const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
};

const editPost = async (id, product) => {
  try {
    const response = await api.put(`/posts/${id}`, post)
    return response.data
  } catch (error) {
    throw error
  }
};

const createPost = async (post) => {
  try {
    const response = await api.post('/posts', post)
    return response.data
  } catch (error) {
    throw error
  }
};

const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
};
