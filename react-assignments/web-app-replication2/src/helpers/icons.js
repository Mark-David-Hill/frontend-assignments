import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

export default function initIcons() {
  return library.add(
    faInstagram,
    faFacebook,
    faLinkedin,
    faTwitter,
    faYoutube,
    faGithub
  );
}
