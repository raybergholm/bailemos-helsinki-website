import React from "react";

import { Container, Row } from 'reactstrap';

const AboutPage = () => (
  <div className="flex-grow-1">
    <Container>
      <Row>
        <h2>Who are we?</h2>
      </Row>
      <Row>
        <p>Hi and welcome! This site is a love letter to the Helsinki Afro-Latin social dance scene from dancers who also know how to do software development.</p>
        <p>Over the last few years we've noticed that the Afro-Latin dance scene has grow extremely quickly, which is absolutely wonderful! But at the same time, that rapid growth has created some new problems: namely that now there's so much happening that in a sea of great parties, festivals and dance courses it's become increasingly harder and harder to find the events that we really want to go to: we're a victim of our own success!</p>
        <p>This is why Bailemos Helsinki was created: our goal is to aggregate the events and courses happening in the Afro-Latin dance scenes in Helsinki to make it easy to find something that suits you.</p>
        <br />
        <p>This originally started out as a hobby project, but we're encountered way too many people who are getting overwhelmed by all the great dance events out there. So this app will be made public for you all to enjoy.</p>
      </Row>
    </Container>
  </div>
);

export default AboutPage;