import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import CustomTooltip from '../Tooltip/CustomTooltip';
import { StyledIconButton, StyledArrowIcon } from './ScrollToTopStyles';

const ScrollToTop: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [buttonBottom, setButtonBottom] = useState('20px');
  const scrollThresholdRef = useRef(500);
  const overlapThresholdRef = useRef(10);
  const fabRef = useRef<HTMLButtonElement>(null);
  const footerRef = useRef<HTMLDivElement>();

  const handleClick = () => {
    scroll.scrollToTop({ duration: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThresholdRef.current) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }

      var fabRect = fabRef.current?.getBoundingClientRect();
      var footerRect = footerRef.current?.getBoundingClientRect();

      if (fabRect && footerRect) {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const visibleHeight =
          Math.min(footerRect.bottom, windowHeight) - Math.max(footerRect.top, 0);

        const isOverlap =
          fabRect.bottom > footerRect.top - overlapThresholdRef.current &&
          fabRect.right > footerRect.left - overlapThresholdRef.current &&
          fabRect.top < footerRect.bottom + overlapThresholdRef.current &&
          fabRect.left < footerRect.right + overlapThresholdRef.current;

        if (isOverlap) {
          setButtonBottom(visibleHeight + 20 + 'px');
        } else {
          setButtonBottom('20px');
        }
      }
    };

    footerRef.current = document.querySelector('#footer-base') as HTMLDivElement;
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    shouldRender && (
      <CustomTooltip title="Scroll to top" arrow>
        <StyledIconButton ref={fabRef} style={{ bottom: buttonBottom }} onClick={handleClick}>
          <StyledArrowIcon fontSize={40} />
        </StyledIconButton>
      </CustomTooltip>
    )
  );
};

export default ScrollToTop;
