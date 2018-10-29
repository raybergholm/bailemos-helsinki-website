import React from "react";

import { Container, Row } from 'reactstrap';

const PrivacyPolicyPage = () => (
  <Container>
    <Row>
      <h2>Our Privacy Policy</h2>
    </Row>
    <Row>
      <p>Your privacy is important to us.</p>
      <p>This is why we don't use your private data at all. Whenever you use the Bailemos Helsinki app, it only uses publicly available information posted by the various dance studios, dance teachers, communities and other related event organisers to aggregate the events and courses happening in the Helsinki.</p>
      <p>Your search terms, your user profiles info and your personal data are never accessed and never saved anywhere because they are not at all necessary for this app to work. In fact, the only reason there's a privacy policy here is because it's required by GDPR and the Facebook Messenger plugin.</p>
    </Row>
  </Container>
);

export default PrivacyPolicyPage;