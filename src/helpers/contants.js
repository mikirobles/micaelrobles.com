import mypicture from "../static/images/my-picture.jpg";
import mypicture2x from "../static/images/my-picture@2x.jpg";
import twitter from "../static/images/twitter.svg";
import linkedin from "../static/images/linkedin.svg";

export const breakpoints = {
  mobile: "(max-width: 550px)"
};

export const images = {
  mypicture,
  mypicture2x,
  twitter,
  linkedin
};

export const routes = [
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Projects",
    href: "/projects"
  },
  {
    name: "Blog",
    href: "https://blog.micaelrobles.com/"
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

export const links = {
  linkedin: "https://www.linkedin.com/in/micael-robles-75851b140/",
  twitter: "https://twitter.com/_mikirobles",
  github: "https://github.com/mikirobles"
};

export const projects = [
  {
    name: "Elektralabs",
    description:
      "Made with Next.js, has Airtable integrations and a slick design!",
    link: "https://elektralabs.com"
  },
  {
    name: "Vinco",
    description: "Made with Vue.js, has some very cool animations",
    link: "http://vinco.me"
  },
  {
    name: "Supermarket List",
    description:
      "Made with React.js. Simple to-do app. But the code is pretty nice!",
    link: "https://supermarket-list.netlify.com/",
    code: "https://github.com/mikirobles/supermarket-todo"
  },
  {
    name: "Spotify Song JSON Generator",
    description:
      "Made with Node.js. CLI utility to create JSON files of spotify songs",
    code: "https://github.com/mikirobles/spotify-song-json-generator"
  },
  {
    name: "Simple Text Editor",
    description:
      "Made with React.js and Redux.js. Make some notes in this good-looking editor!",
    link: "https://simple-text-editor.netlify.com/",
    code: "https://github.com/mikirobles/simple-text-editor"
  },
  {
    name: "Aerolab Challenge",
    description: "Made with Next.js, a pretty cool challenge.",
    link: "https://mikichallenge.now.sh/",
    code: "https://github.com/mikirobles/aerochallenge"
  }
];

export default {
  breakpoints,
  images,
  links,
  projects,
  routes
};
