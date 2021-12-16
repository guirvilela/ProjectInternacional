import React from 'react';
import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import ActiveLink from '../ActiveLink';

interface NavLinkProps extends LinkProps {
  children: string;
  icon: IconType;
  href: string;
  name?: string;
}

export default function NavLink({
  children,
  icon,
  href,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink to={href} href={href}>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
