import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
// import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import SidebarNav from './SidebarNav';

const Sidebar = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSideBar) {
    return (
      <>
        <Button colorScheme="teal" onClick={onOpen}>
          Open
        </Button>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="gray.600" p="4">
              <DrawerCloseButton mt="6" />
              <DrawerHeader>Navegação</DrawerHeader>

              <DrawerBody>
                <SidebarNav />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
};

export default Sidebar;
