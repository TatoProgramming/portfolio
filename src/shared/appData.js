import Vue from 'vue';

const appData = {
  baseUrl: window.location.pathname,
  socialLinks: [
    {iconName: "github square", link: "", tooltip: "Github"},
    {iconName: "linkedin square", link: "", tooltip: "Linkedin"},
    {iconName: "mail square", link: "", tooltip: "Email"},
    {iconName: "steam square", link: "", tooltip: "Steam"},
    {iconName: "game square", link: "", tooltip: "Blizzard's BattleNet"},
  ],
  projects: [
    {
      name: "Ray Tracer",
      image: './assets/img/example.jpg',
      date: "MM/DD/YYYY",
      meta: "School Project - Computer Graphics",
      description: "My first implementation of a ray tracer done in real time.",
      link: ""
    },
    {
      name: "Terrain Generator",
      image: "",
      date: "MM/DD/YYYY",
      meta: "School Project - Computer Graphics",
      description: "A procedural terrain generator done in webGL.",
      link: ""
    },
    {
      name: "Ray Marcher",
      image: "",
      date: "MM/DD/YYYY",
      meta: "School Project - Computer Graphics",
      description: "This was an experiment with the ray marching rendering technique.",
      link: ""
    },
    {
      name: "Example",
      image: "",
      date: "MM/DD/YYYY",
      meta: "School Project - Computer Graphics",
      description: "",
      link: ""
    }
  ],
  iconSlots:["bar", "gamepad", "keyboard", "desktop", "database", "html5", "microchip", "music", "paw", "tree", "television", "steam"],
  // TODO: think of a better name of this.
  segments:{
    about:{
      title: "About me"
    },
    contact:{
      title: "Contact"
    }
  },


};

console.log(window.location.pathname);
appData.install = function () {
  Object.defineProperty(Vue.prototype, '$appData', {
    get() {
      return appData
    }
  })
};

export default appData;
