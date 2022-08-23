import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
  SetUserAction,
} from './types';
import { IUser } from './../../../models/IUser';
import { AppDispatch } from '../..';
import axios from '../../../axios';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
  setIsLoading: (payload: boolean): SetLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await axios.get<IUser[]>('/auth');
      const mockUser = response.data.find(
        (user) => user.username === username && user.password === password,
      );
      if (mockUser) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', mockUser.username);
        dispatch(AuthActionCreators.setIsAuth(true));
        dispatch(AuthActionCreators.setUser(mockUser));
      } else {
        dispatch(AuthActionCreators.setError('Некоректный логин или пароль'));
      }
    } catch (e) {
      dispatch(AuthActionCreators.setError('Произошла ошибка при логине'));
    }
    dispatch(AuthActionCreators.setIsLoading(false));
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
