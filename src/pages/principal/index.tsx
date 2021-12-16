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
import { addInfoUser } from '../../store/modules/user/actions';
import { IState } from '../../store';
import { IUser } from '../../store/modules/user/types';

type CreateNewUserData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Mínimo 6 caracteres'),
  confirm_password: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

const PrincipalComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserSchema),
  });

  const { errors } = formState;
  const state = useSelector<IState, IUser>((state) => state.user);

  const handleNext: SubmitHandler<CreateNewUserData> = async ({
    name,
    email,
    password,
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(addInfoUser({ name, email, password }));
    navigate('/users');
  };
  console.log('STATE', state);

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
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.500" />

          <VStack as="form" spacing={['6', '8']}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="text"
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              />
              <Input
                type="email"
                label="E-mail"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="password"
                label="Senha"
                {...register('password')}
                error={errors.password}
              />
              <Input
                type="password"
                label="Confirmar Senha"
                {...register('confirm_password')}
                error={errors.confirm_password}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="6" justify="flex-end">
            <Button type="submit" isLoading={formState.isSubmitting}>
              Próximo passo
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PrincipalComponent;
