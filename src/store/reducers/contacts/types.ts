import { IContact } from '../../../models/IUser';

export interface ContactState {
  error: string;
  contact: IContact[];
  isLoading: boolean;
}

export enum ContactActionEnum {
  SET_CONCTACTS = 'SET_CONCTACTS',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface SetConctactAction {
  type: ContactActionEnum.SET_CONCTACTS;
  payload: IContact[];
}

export interface SetErrorAction {
  type: ContactActionEnum.SET_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: ContactActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export type ContactAction = SetConctactAction | SetErrorAction | SetIsLoadingAction;
