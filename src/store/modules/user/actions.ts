import { IUser } from './types';

export const addInfoUser = ({ name, email, password }: IUser) => {
  return {
    type: 'ADD_INFO_USER',
    payload: {
      name,
      email,
      password,
    },
  };
};

export const addAddressInfoUser = ({
  address,
  neight,
  number,
  complement,
}: IUser) => {
  return {
    type: 'ADD_ADDRESS_INFO_USER',
    payload: {
      address,
      neight,
      number,
      complement,
    },
  };
};
