import styled from '@emotion/styled';

export const MapContainer = styled.div`
  flex: 5;
  display: flex
`;

export const StyledMap = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const MarkerContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  &:hover {
    z-index: 2;
  }
`;

export const Pointer = styled.div`
  cursor: pointer;
`;
