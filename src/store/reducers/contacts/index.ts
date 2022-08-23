import { ContactAction, ContactActionEnum, ContactState } from './types';

const initialState: ContactState = {
  error: '',
  contact: [],
  isLoading: false,
};

export default function contactReducer(state = initialState, action: ContactAction): ContactState {
  switch (action.type) {
    case ContactActionEnum.SET_CONCTACTS:
      return { ...state, contact: action.payload };
    case ContactActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ContactActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
