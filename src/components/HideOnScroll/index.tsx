import React, { FC, memo, ReactElement } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

interface HideOnScrollProps {
  children?: ReactElement;
  target: Node | Window | undefined;
}

const HideOnScroll: FC<HideOnScrollProps> = ({ children, target }) => {
  const trigger = useScrollTrigger({ target });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default memo(HideOnScroll);
