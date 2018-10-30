import React from "react";

import { FACEBOOK_PAGE_URL } from "../../appConfig";

const Notice = () => (
  <div>
    <p><strong>WEBSITE UNDER CONSTRUCTION</strong></p>
    <p>We're currently making the Facebook Messenger chatbot plugin as awesome as possible, so check out the <a href={FACEBOOK_PAGE_URL}>main Facebook page</a> for the latest updates!</p>
    <p></p>
  </div>
);

export default Notice;