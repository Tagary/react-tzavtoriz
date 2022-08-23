import { AppDispatch } from '../..';
import { ContactActionEnum, SetConctactAction, SetErrorAction, SetIsLoadingAction } from './types';
import axios from '../../../axios';
import { IContact } from '../../../models/IUser';

export const ContactActionCreators = {
  setLoadingContact: (payload: boolean): SetIsLoadingAction => ({
    type: ContactActionEnum.SET_IS_LOADING,
    payload,
  }),
  setContacts: (contacts: IContact[]): SetConctactAction => ({
    type: ContactActionEnum.SET_CONCTACTS,
    payload: contacts,
  }),
  setError: (payload: string): SetErrorAction => ({ type: ContactActionEnum.SET_ERROR, payload }),
  getContacts: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(ContactActionCreators.setLoadingContact(true));
      const response = await axios.get<IContact[]>('/contacts');
      const mockContacts = response.data;
      dispatch(ContactActionCreators.setContacts(mockContacts));
    } catch (e) {
      dispatch(ContactActionCreators.setError('Произошла ошибка при загрузке контактов'));
    }
  },
};
