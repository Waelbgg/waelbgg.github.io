(() => {
  "use strict";

  const movedSections = new Map([
    ["#cv", "./contacto/#cv"],
    ["#tecnologias", "./sobre-mi/#tecnologias"],
    ["#daw-demo", "./daw-os/#daw-demo"],
    ["#daw-architecture", "./daw-os/#daw-architecture"],
    ["#demo-details", "./daw-os/#demo-details"],
    ["#architecture-details", "./daw-os/#architecture-details"],
  ]);

  function followMovedSection() {
    const destination = movedSections.get(location.hash);
    if (destination) location.replace(destination);
  }

  window.addEventListener("hashchange", followMovedSection);
  followMovedSection();
})();
