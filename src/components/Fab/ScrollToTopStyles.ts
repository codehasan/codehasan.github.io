import { MdKeyboardArrowUp } from 'react-icons/md';
import { IconButton, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: var(--background-color-bottom);
  padding: 10px;
  transition: bottom 0.3s ease-out;
`;

export const StyledArrowIcon = styled(MdKeyboardArrowUp)`
  background-color: #007bff;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(160, 170, 180, 0.6);
`;
