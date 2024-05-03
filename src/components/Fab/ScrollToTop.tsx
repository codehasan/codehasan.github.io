import { IconButton, Tooltip, styled } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  padding: 10px;
  transition: bottom 0.3s ease-out;
`;

const StyledArrowIcon = styled(MdKeyboardArrowUp)`
  background-color: #007bff;
  border-radius: 999px;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(160, 170, 180, 0.6);
`;

function ScrollToTop() {
  const [open, setOpen] = React.useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [buttonBottom, setButtonBottom] = useState('20px');
  const scrollThresholdRef = useRef(500);
  const overlapThresholdRef = useRef(10);
  const fabRef = useRef<HTMLButtonElement>(null);
  const footerRef = useRef<HTMLDivElement>();

  const handleClick = () => {
    setOpen(false);
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
      <Tooltip
        title="Scroll to top"
        placement="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <StyledIconButton
          id="fab-scroll-to-top"
          ref={fabRef}
          style={{ bottom: buttonBottom }}
          size="large"
          aria-label="Scroll to top"
          onClick={handleClick}
        >
          <StyledArrowIcon fontSize={40} />
        </StyledIconButton>
      </Tooltip>
    )
  );
}

export default ScrollToTop;
