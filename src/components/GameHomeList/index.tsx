import React from "react";
import GameHome from "../GameHome";

import { Container } from "./styles";

export default function GameHomeList() {
  return (
    <Container>
      <GameHome 
        cover="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2021/08/ForzaHorizon5_KeyArt_Vert_RGB_Final.jpg"
        name="Forza Horizon 5"
        position={1}
      />

      <GameHome 
        cover="https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png?w=440"
        name="The witcher 3"
        position={2}
      />

      <GameHome 
        cover="https://s2.glbimg.com/nDEfzoOO7OCSrQXZDpHryMMWTko=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/Q/c/A6W12zQkK583TRUWAIRw/3682297-the-last-of-us-part-ii-review-promothumb.jpg"
        name="The last of us 2"
        position={3}
      />

      <GameHome 
        cover="https://upload.wikimedia.org/wikipedia/pt/1/13/Uncharted_4_capa.png"
        name="Uncharted 4"
        position={4}
      />

      <GameHome 
        cover="https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDfb8QFD.png"
        name="Ghost of tsushima"
        position={5}
      />

      <GameHome 
        cover="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2021/08/ForzaHorizon5_KeyArt_Vert_RGB_Final.jpg"
        name="Forza Horizon 5"
        position={6}
      />

      <GameHome 
        cover="https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png?w=440"
        name="The witcher 3"
        position={7}
      />

      <GameHome 
        cover="https://s2.glbimg.com/nDEfzoOO7OCSrQXZDpHryMMWTko=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/Q/c/A6W12zQkK583TRUWAIRw/3682297-the-last-of-us-part-ii-review-promothumb.jpg"
        name="The last of us 2"
        position={8}
      />

      <GameHome 
        cover="https://upload.wikimedia.org/wikipedia/pt/1/13/Uncharted_4_capa.png"
        name="Uncharted 4"
        position={9}
      />

      <GameHome 
        cover="https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDfb8QFD.png"
        name="Ghost of tsushima"
        position={10}
      />

    </Container>
  );
}