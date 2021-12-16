import React from 'react';
import { Flex } from '@chakra-ui/react';
import Logo from './Logo';
import NotificationNav from './NotificationNav';
import Profile from './Profile';

const HeaderComponent = () => {
  return (
    <Flex as="header" w="100%" h="20" mx="auto" mt="4" px="6" align="center">
      <Logo />
      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile />
      </Flex>
    </Flex>
  );
};

export default HeaderComponent;
