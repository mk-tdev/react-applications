import * as api from "../api";

// Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    const action = { type: "FETCH_ALL", payload: processData(data) };
    dispatch(action);
  } catch (error) {
    console.log("Error in fetching: ", error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    const action = { type: "CREATE_POST", payload: data };
    dispatch(action);
  } catch (error) {
    console.log("Error in Create Post: ", error);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    const action = { type: "UPDATE_POST", payload: data };
    dispatch(action);
  } catch (error) {
    console.log("Error in Update Post: ", error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    const action = { type: "DELETE_POST", payload: id };
    dispatch(action);
  } catch (error) {
    console.log("Error in Delete Post: ", error);
  }
};

const processData = (data) => {
  return data.map((d) => ({
    ...d,
    tags: [...(d.tags.length > 0 ? d.tags[0].split(",") : "")],
  }));
};
