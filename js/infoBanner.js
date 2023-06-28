AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
          wonderwoman: {
            banner_url: "assets/posters/wonderwoman-banner.jpg",
            title: "Wonder woman",
            released_year: "1983",
            description:
              "Wonder Woman is a superhero created by the American psychologist and writer William Moulton Marston (pen name: Charles Moulton), and artist Harry G. Peter in 1941 for DC Comics. Marston's wife, Elizabeth, and their life partner, Olive Byrne, are credited as being his inspiration for the character's appearance.",
          },
          mandrake: {
            banner_url: "assets/posters/mandrake-banner.jpg",
            title: "Mandrake The Magician",
            released_year: "1962",
            description:
              "Mandrake the Magician is a syndicated newspaper comic strip, created by Lee Falk before he created The Phantom. Mandrake began publication on June 11, 1934. Phil Davis soon took over as the strip's illustrator, while Falk continued to script. The strip was distributed by King Features Syndicate.",
          },
          phantom: {
            banner_url: "assets/posters/phantom-banner.jpg",
            title: "The Phantom",
            released_year: "1936",
            description:
              "The Phantom is an American adventure comic strip, first published by Lee Falk in February 1936. The main character, the Phantom, is a fictional costumed crime-fighter who operates from the fictional African country of Bangalla. The character has been adapted for television, film and video games.",
          },
          spiderman: {
            banner_url: "assets/posters/spiderman-banner.jpg",
            title: "Amazing Spiderman",
            released_year: "1952",
            description:
              "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays.",
          },
        };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });