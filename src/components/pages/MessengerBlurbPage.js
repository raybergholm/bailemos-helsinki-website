import React from "react";

import { Container, Row } from "reactstrap";

import { FACEBOOK_PAGE_URL } from "../../appConfig";

const MessengerBlurbPage = () => (
  <div className="flex-grow-1">
    <Container>
      <Row>
        <h2>Our Facebook page and Messenger chatbot</h2>
        <p>Since the majority of all event organisation in Helsinki is done via Facebook, we have a <a href={FACEBOOK_PAGE_URL}>Facebook page here</a> where we keep an eye on public events, courses and other.</p>
        <p>We also provide a Facebook Messenger chatbot on that page to let you query all the public dance events we've found: just open the chat and ask something, the chatbot will respond accordingly and try to find events if you ask.</p>
      </Row>
    </Container>
  </div>
);

export default MessengerBlurbPage;