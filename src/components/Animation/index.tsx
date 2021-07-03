import React, { FC, memo } from 'react';
import Lottie from 'lottie-web-react';

interface AnimationProps {
  animationData: JSON;
  className?: string;
  onClick?: () => void;
}
const Animation: FC<AnimationProps> = (props) => {
  const rendererSettings = {
    preserveAspectRatio: 'xMinYMin slice'
  };
  return (
    <Lottie
      options={{
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: props.animationData,
        rendererSettings: rendererSettings
      }}
      playingState={'play'}
      speed={1}
      direction={1}
      className={props.className}
      onClick={props.onClick}
    />
  );
};

export default memo(Animation);
