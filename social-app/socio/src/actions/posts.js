import * as api from "../api";
import * as ACTIONS from "../constants/actionTypes";

// Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    const action = { type: ACTIONS.FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log("Error in fetching: ", error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    const action = { type: ACTIONS.CREATE_POST, payload: data };
    dispatch(action);
  } catch (error) {
    console.log("Error in Create Post: ", error);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    const action = { type: ACTIONS.UPDATE_POST, payload: data };
    dispatch(action);
  } catch (error) {
    console.log("Error in Update Post: ", error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    const action = { type: ACTIONS.DELETE_POST, payload: id };
    dispatch(action);
  } catch (error) {
    console.log("Error in Delete Post: ", error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    const action = { type: ACTIONS.LIKE_POST, payload: data };
    dispatch(action);
  } catch (error) {
    console.log("Error in Like Post: ", error);
  }
};
