import styled from '@emotion/styled';

export const CollapseButton = styled.button<{ collapse: boolean }>`
  background: transparent;
  border: none;
  width: 26px;
  height: 26px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  transition: all ease 0.5s;
  ${({ collapse }) =>
    collapse &&
    `
    & {
      transform: rotate( -90deg );
    }
  `};
`;
