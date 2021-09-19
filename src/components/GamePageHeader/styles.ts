import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Cover = styled.img`
  width: 193px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
`;

export const Content = styled.div`
  margin-left: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`;

export const ReleaseDate = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ContainerRating = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const Rating = styled.p`
  font-size: 20px;
  color: #FFD700;
  font-weight: bold;

  margin: 0 24px;
`;

export const RatingCount = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 32px;
  width: 675px;
  margin-top: 36px;
`;
