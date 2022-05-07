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
    name: "¿Dónde lo miro?",
    description: `Easily look up on which streaming platform the TV show or movie you want to watch is.<br> This app <strong><a target='_blank' rel='noreferrer' href='${links.twitter}/status/1520957915532001280'>blew up</a></strong> on twitter and got 60k+ users on the first day!`,
    link: "https://www.dondelomiro.com/"
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
    name: "Game of Life",
    description:
      "Simple React + Canvas game made in CodeSandbox.",
    link: "https://game-of-layf.netlify.app/",
    code: "https://github.com/mikirobles/game-of-life"
  }
];

export default {
  breakpoints,
  images,
  links,
  projects,
  routes
};
