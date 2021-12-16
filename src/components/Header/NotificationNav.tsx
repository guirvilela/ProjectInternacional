import React from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';
import SwitchColorThemeProvider from '../SwitchColorTheme/SwitchColorTheme';

const NotificationNav = () => {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.200"
    >
      <SwitchColorThemeProvider />
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
};

export default NotificationNav;
