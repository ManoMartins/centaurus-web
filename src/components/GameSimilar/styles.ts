import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 190px;
  height: 190px;
  min-width: 133px;
  width: 133px;
  margin-top: 40px;
`;

export const LinkContainer = styled(Link)``;

export const Name = styled.span`
  font-size: 14px;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;