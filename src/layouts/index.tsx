import React, { FC, Fragment, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import HideOnScroll from 'cxComponent/HideOnScroll';
import AppHeader from 'cxLayout/AppHeader';
import AppContent from 'cxLayout/AppContent';
import AppSideBar from 'cxLayout/AppSideBar';
import './index.less';

const AppLayout: FC = () => {
  const [scrollTarget, setScrollTarget] = useState<Node | Window | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div
      ref={(node) => {
        if (node) {
          setScrollTarget(node);
        }
      }}
      className="app-container"
    >
      <AppHeader
        target={scrollTarget}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <AppSideBar open={open} handleDrawerClose={handleDrawerClose} />
      <AppContent open={open} />
      {/* <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container> */}
    </div>
  );
};

export default AppLayout;
