import { useLocation, Link, LinkProps } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children?: ReactElement;
  shouldMatchExactHref?: boolean;
  href: string;
}

const ActiveLink = ({
  children,
  shouldMatchExactHref = false,
  href,
  ...rest
}: ActiveLinkProps) => {
  return (
    <Link {...rest}>
      <Text color={href === '/' || href === '/users' ? 'blue.300' : 'gray.500'}>
        {children}
      </Text>
    </Link>
  );
};
export default ActiveLink;
