import React from "react";

import { Container, Row } from "reactstrap";

const PrivacyPolicyPage = () => (
  <Container>
    <Row>
      <h2>Our Privacy Policy</h2>
    </Row>
    <Row>
      <h6><strong>Last updated: 30.10.2018</strong></h6>
    </Row>
    <Row>
      <p>Your privacy is important to us. This is why we don't use your private data at all.</p>
      <p>Whenever you use the Bailemos Helsinki Facebook Messenger, it only uses publicly available information posted by the various dance studios, dance teachers, communities and other related event organisers to aggregate the events and courses happening in the Helsinki.</p>
      <p>Your search terms, your user profiles info and your personal data are never accessed and never saved anywhere because they are not at all necessary for this app to work.</p>
      <br />
      <p>This site also does not track anything: we do not store cookies or session data.</p>
    </Row>
  </Container>
);

export default PrivacyPolicyPage;