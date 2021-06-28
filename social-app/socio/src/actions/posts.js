import * as api from "../api";

// Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: "FETCH_ALL", payload: data };
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
