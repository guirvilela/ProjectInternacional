import React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { SiCodeship } from 'react-icons/si';
import { IState } from '../../store';

const Logo = () => {
  return (
    <Flex flexDir="column" justify="center">
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        Simplifica Fretes
      </Text>
      <Flex fontSize={['1xl', '2xl']} color="blue.200" align="center" mt="-2">
        <Text as="span" fontWeight="bold">
          Internacional
        </Text>
        <Icon ml="1" as={SiCodeship} />
      </Flex>
    </Flex>
  );
};

export default Logo;
