import React from "react";

import { Container, Row } from "reactstrap";

import { APP_PATHS } from "../../appConfig";

const MainPagePage = () => (
  <Container>
  <Row>
    <p>Hi and welcome!</p>
    <p>Bailemos Helsinki is a non-profit project made by dancers who also knows how to do software development. We're not affiliated with any particular dance school or organiser: we're here for the community itself.</p>
    <p>Over the last few years we've noticed that the Afro-Latin dance scene has grow extremely quickly, which is absolutely wonderful! But at the same time, that rapid growth has created some new problems: namely that now there's so much happening that in a sea of great parties, festivals and dance courses it's become increasingly harder and harder to find the events that we really want to go to: we're a victim of our own success!</p>
    <p>This is why Bailemos Helsinki was created: our goal is to aggregate the events and courses happening in the Afro-Latin dance scenes in Helsinki to make it easy to find something that suits you.</p>
    <br />
    <p>This originally started out as a hobby project, but we're encountered way too many people who are getting overwhelmed by all the great dance events out there. So this app will be made public for you all to enjoy.</p>
  </Row>
  <Row>
    <h2>Handy links</h2>
  </Row>
  <Row>
    <li>
      <a href={APP_PATHS.Blurbs.Messenger}>Facebook Messenger chatbot</a>
    </li>
  </Row>
  </Container>
);

export default MainPagePage;