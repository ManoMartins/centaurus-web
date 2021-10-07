import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container, Content, Story, Title } from "./styles";

interface Props {
  storyline?: string;
}

export default function GameStoryline({
  storyline = "Sorry this title has no history",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const formattedStoryline = storyline
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  function getRenderLines() {
    if (isOpen) {
      return formattedStoryline.map((line) => {
        return (
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={line}
          >
            {line}
          </motion.p>
        );
      });
    }

    return formattedStoryline.slice(0, 3).map((line, i) => (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={line}
      >
        {line}
      </motion.p>
    ));
  }

  return (
    <Container>
      <Content>
        <Title>Storyline</Title>
        <Story>
          <AnimatePresence>{getRenderLines()}</AnimatePresence>
          <button onClick={() => setIsOpen(!isOpen)}>
            {formattedStoryline.length > 3 &&
              (!isOpen ? "show more" : "show less")}
          </button>
        </Story>
      </Content>
    </Container>
  );
}
