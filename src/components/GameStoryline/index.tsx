import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Container, Content, Story, Title } from './styles';

const test = "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.\n\nThis is Your Horizon Adventure\nLead breathtaking expeditions across the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.\n\nThis is a Diverse Open World\nExplore a world of striking contrast and beauty. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano.\n\nThis is an Adventurous Open World\nImmerse yourself in a deep campaign with hundreds of challenges that reward you for engaging in the activities you love. Meet new characters and choose the outcomes of their Horizon Story missions.\n\nThis is an Evolving Open World\nTake on awe-inspiring weather events such as towering dust storms and intense tropical storms as Mexico’s unique, dynamic seasons change the world every week. Keep coming back for new events, challenges, collectibles, and rewards, and new areas to explore. No two seasons will ever be the same.\n\nThis is a Social Open World\nTeam up with other players and enter the Horizon Arcade for a continuing series of fun, over-the-top challenges that keep you and your friends in the action and having fun with no menus, loading screens or lobbies. Meet new friends in Horizon Open and Tours and share your creations with new community gift sharing.\n\nThis is Your Open World\nCreate your own expressions of fun with the powerful new EventLab gameplay toolset including custom races, challenges, stunts, and entirely new game modes. Customize your cars in more ways than ever before with new options such as the ability open and close convertible tops, paint brake calipers, and more. Use the new Gift Drops feature to share your custom creations with the community.\n\nBegin Your Horizon Adventure today!"

export default function GameStoryline() {
  const [isOpen, setIsOpen] = useState(false);

  const storyline = test.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  function getRenderLines() {
    if (isOpen) {
      return storyline.map((line) => {
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
        )
      })
    }

    return storyline.slice(0, 3).map((line, i) => (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={line}
      >{line}</motion.p>
    ))
  }

  return (
    <Container>
      <Content>
        <Title>Storyline</Title>
        <Story>
          <AnimatePresence>{getRenderLines()}</AnimatePresence>
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? "show more" : "show less"}
          </button>
        </Story>
      </Content>
    </Container>
  );
}