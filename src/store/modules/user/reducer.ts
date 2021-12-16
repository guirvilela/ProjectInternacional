import { Reducer } from 'redux';
import { IUser } from './types';
import { produce } from 'immer';

const INITIAL_STATE: IUser = {
  name: '',
  email: '',
  password: '',
};

const user: Reducer<IUser> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_INFO_USER': {
        const { name, email, password } = action.payload;
        return {
          ...draft,
          name,
          email,
          password,
        };
      }
      case 'ADD_ADDRESS_INFO_USER': {
        const { address, neight, number, complement } = action.payload;
        return {
          ...draft,
          address,
          neight,
          number,
          complement,
        };
      }
      default: {
        return draft;
      }
    }
  });
};

export default user;
