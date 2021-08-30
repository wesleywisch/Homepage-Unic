import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => ( primary ? '#000d1a' : 'cd853f' )};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 6.25rem;
  max-width: 12.5rem;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => ( big ? '1rem 2.5rem' : '0.875rem 1.5rem' )};
  color: ${({ primary }) => ( primary ? '#fff' : '#000d1a' )};
  font-size: ${({ big }) => ( big ? '1.25rem' : '0.875rem' )};

  &:hover{
    transform: translateY(-2px);
  }
`;