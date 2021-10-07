import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled.div`
  padding: 0 16px;
  margin: 40px 0;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Story = styled(motion.div)`
  width: 900px;

  p {
    line-height: 32px;
    font-size: 14px;
  }
  
  p:nth-last-child(1) {
    display: inline;
  }

  button {
    font-size: 14px;
    background: none;
    border: none;
    color: #2A5BD8;
  }

  button:hover {
    text-decoration: underline;
  }
`;
