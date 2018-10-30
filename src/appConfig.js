export const FACEBOOK_PAGE_URL = "#";

export const APP_PATHS = {
  Root: "/",
  About: "/about",
  PrivacyPolicy: "/privacy-policy",
  Plugins: {
    Messenger: "/plugins/messenger"
  }
};

export const NAVBAR_CONFIG = [
  { type: "dropdown", text: "Plugins", items: [{ text: "Facebook Messenger Chatbot", url: APP_PATHS.Plugins.Messenger }]},
  { type: "link", text: "About", url: APP_PATHS.About },
  { type: "link", text: "Privacy Policy", url: APP_PATHS.PrivacyPolicy }
];