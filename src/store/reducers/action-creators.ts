import { AuthActionCreators } from './auth/action-creators';
import { ContactActionCreators } from './contacts/action-creators';

export const allActionCreators = {
  ...AuthActionCreators,
  ...ContactActionCreators,
};
