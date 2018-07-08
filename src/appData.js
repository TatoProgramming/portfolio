import Vue from 'vue';
const globals = {
  email: "taylputn@gmail.com",
};

const appData = {
  socialLinks: [
    {iconName: "github square", link: "https://github.com/TatoProgramming", tooltip: "Github"},
    {iconName: "linkedin square", link: "https://www.linkedin.com/in/taylor-putnam-b22a35149/", tooltip: "Linkedin"},
    {iconName: "steam square", link: "https://steamcommunity.com/id/Eefgurky", tooltip: "Steam"},
    {iconName: "mail square", link: `mailto:${globals.email}`, tooltip: "Email"},
  ],
  projects: [
    {
      name: "Ray Tracer",
      image: require('./assets/images/example.jpg'),
      meta: "School Project - Computer Graphics",
      description: "My first implementation of a ray tracer done in real time using GLSL.",
      link: ""
    },
    {
      name: "Terrain Generator",
      image: require('./assets/images/example.jpg'),
      meta: "School Project - Computer Graphics",
      description: "A procedural terrain generator done in webGL, using perlin noise.",
      link: ""
    },
    {
      name: "Ray Marcher",
      image: require('./assets/images/example.jpg'),
      meta: "School Project - Computer Graphics",
      description: "This was an experiment with the ray marching rendering technique does in real time.",
      link: ""
    },
  ],
  iconSlots:["bar", "gamepad", "keyboard", "desktop", "database", "html5", "microchip", "music", "paw", "tree", "television", "steam"],
};

appData.install = function () {
  Object.defineProperty(Vue.prototype, '$appData', {
    get() {
      return appData
    }
  })
};

export default appData;
