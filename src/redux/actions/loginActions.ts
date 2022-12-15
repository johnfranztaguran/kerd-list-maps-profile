import { action } from 'typesafe-actions'
import { AUTH } from './actionTypes'

export const loginRequest = (payload: boolean) =>
  action(AUTH.LOGIN_REQUEST, payload)

export const loginSuccess = (payload: object) =>
  action(AUTH.LOGIN_SUCCESS, payload)

export const loginFailed = (payload: any) =>
  action(AUTH.LOGIN_FAILED, payload)

  export const setUserAuth = () => {
    return async (dispatch: any) => {
      dispatch(loginRequest(true));
      const token = {
        accessToken: 'testtoken',
        refreshToken: 'test-refreshToken'
      };
      await dispatch(loginSuccess(token));
      dispatch(loginRequest(false));
    };
  };

  export const removeUserAuth = () => {
    return async (dispatch: any) => {
      dispatch(loginRequest(true));
      const token = {
        accessToken: '',
        refreshToken: ''
      };
      await dispatch(loginSuccess(token));
      dispatch(loginRequest(false));
    };
  };

export const setUserAuthV2 = (user: any) => {
  return async (dispatch: any) => {
    dispatch(loginRequest(true));
    if (user === undefined) {
      dispatch(loginFailed(user))
      dispatch(loginRequest(false));
    } else {
      await dispatch({
        type: AUTH.SET_USER_AUTH,
        payload: user,
      });
      dispatch(loginRequest(false));
    }
  };
};
