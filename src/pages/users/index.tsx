import React, { useCallback } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../../components/Header';
import { Input } from '../../components/InputForm';
import Sidebar from '../../components/Sidebar';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  addAddressInfoUser,
  addInfoUser,
} from '../../store/modules/user/actions';
import { IState } from '../../store';
import { IUser } from '../../store/modules/user/types';

type CreateUserAddressData = {
  address: string;
  neight: string;
  number: number;
  complement: string;
};

const createUserSchema = yup.object().shape({
  address: yup.string().required('Endereço obrigatório'),
  neight: yup.string().required('Bairro obrigatório'),
  number: yup.string().required('Número obrigatório'),
});

const UsersComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserSchema),
  });

  const { errors } = formState;
  const state = useSelector<IState, IUser>((state) => state.user);

  const handleNext: SubmitHandler<CreateUserAddressData> = async ({
    address,
    neight,
    number,
    complement,
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(addAddressInfoUser({ address, neight, number, complement }));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate('/');
  };
  console.log(state);

  return (
    <Flex flexDir="column" h="100vh">
      <HeaderComponent />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          p={['6', '8']}
          onSubmit={handleSubmit(handleNext)}
        >
          <Heading size="lg" fontWeight="normal">
            Adicionar Endereço
          </Heading>
          <Divider my="6" borderColor="gray.500" />

          <VStack as="form" spacing={['6', '8']}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="text"
                label="Endereço"
                error={errors.address}
                {...register('address')}
              />
              <Input
                type="text"
                label="Bairro"
                {...register('neight')}
                error={errors.neight}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="number"
                label="Número"
                {...register('number')}
                error={errors.number}
              />
              <Input
                type="complement"
                label="Complemento"
                {...register('complement')}
                error={errors.complement}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="6" justify="flex-end">
            <Button type="submit" isLoading={formState.isSubmitting}>
              Enviar Formulário
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default UsersComponent;
