import Vue from 'vue';

const appData = {
  socialLinks: [
    {iconName: "github square", link: ""},
    {iconName: "linkedin square", link: ""}
  ],
  projects: [
    {
      name: "Ray Tracer",
      imageSource: "/assets/images/example.jpg",
      date: "MM/DD/YYYY",
      meta: "School Project - Computer Graphics",
      description: "My first implementation of a ray tracer done in real time.",
      link: ""
    },
    {
      name: "Terrain Generator",
      imageSource: "",
      date: "MM/DD/YYYY",
      meta: "School Project - Computer Graphics",
      description: "A procedural terrain generator done in webGL.",
      link: ""
    },
    {
      name: "Ray Marcher",
      imageSource: "",
      date: "MM/DD/YYYY",
      meta: "School Project - Computer Graphics",
      description: "This was an experiment with the ray marching rendering technique.",
      link: ""
    },
    {
      name: "Example",
      imageSource: "",
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

appData.install = function () {
  Object.defineProperty(Vue.prototype, '$appData', {
    get() {
      return appData
    }
  })
};

export default appData;
