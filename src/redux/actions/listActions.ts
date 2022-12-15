import { action } from 'typesafe-actions'
import { APP_LIST } from './actionTypes'
import { Dispatch, AnyAction } from 'redux';
import Config from 'react-native-config';
import axios from 'axios';

export const getRequestRecipes = (payload: boolean) =>
  action(APP_LIST.GET_REQUEST_RECIPES, payload)

export const getSuccessRecipes = (payload: any) =>
  action(APP_LIST.GET_SUCCESS_RECIPES, payload)

export const getFailedRecipes = (payload: any) =>
  action(APP_LIST.GET_FAILED_RECIPES, payload)

export const getRequestCategories = (payload: boolean) =>
  action(APP_LIST.GET_REQUEST_CATEGORIES, payload)

export const getSuccessCategories = (payload: any) =>
  action(APP_LIST.GET_SUCCESS_CATEGORIES, payload)

export const getFailedCategories = (payload: any) =>
  action(APP_LIST.GET_FAILED_CATEGORIES, payload)

export const getRecipes = () => {
return (dispatch: any) => {
  dispatch(getRequestRecipes(true));
  axios.get('http://localhost:3001/recipes')
    .then(res => {
      if (res.status === 200) {
        dispatch(getSuccessRecipes(res.data));
      }
      dispatch(getRequestRecipes(false));
    })
    .catch(err => {
      console.error('Error: ', err);
      dispatch(getFailedRecipes({ errorMsg: err }));
    });
  };
};

export const getCategories = () => {
  return (dispatch: any) => {
    dispatch(getRequestCategories(true));
    axios.get('http://localhost:3001/categories')
      .then(res => {
        if (res.status === 200) {
          dispatch(getSuccessCategories(res.data));
        }
        dispatch(getRequestCategories(false));
      })
      .catch(err => {
        console.error('Error: ', err);
        dispatch(getFailedCategories({ errorMsg: err }));
      });
    };
  };

export const selectRecipe = (item: object) => {
  return (dispatch: any) => {
    dispatch({
      type: APP_LIST.SET_SELECTED_RECIPE,
      payload: item,
    });
  };
};

export const editRecipe = (item: any, id: number, title: string) => {
  return async (dispatch: any) => {
    dispatch(getRequestRecipes(true));
    try {
      const result = await axios.patch(`http://localhost:3001/recipes/${id}`, {
        ...item,
        title
      });
      if (result.status === 200) {
        await dispatch(getRequestRecipes(false));
      }
    } catch (err) {
      console.error('Error: ', err);
      await dispatch(getFailedRecipes(err))
      await dispatch(getRequestRecipes(false));
    }
  };
};

export const deleteRecipe = (id: number) => {
  return async (dispatch: any) => {
    dispatch(getRequestRecipes(true));
    try {
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      // delete lodash issue
      await dispatch(selectRecipe({}))
      await dispatch(getRequestRecipes(false));
    } catch (err) {
      console.error('Error: ', err);
      await dispatch(getFailedRecipes(err))
      await dispatch(getRequestRecipes(false));
    }
  };
};
