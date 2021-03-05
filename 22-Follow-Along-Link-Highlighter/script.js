const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
   const el = this;
   const linkCoords = el.getBoundingClientRect();
   console.log(linkCoords);
   const coords = {
     width: linkCoords.width,
     height: linkCoords.height,
     x: linkCoords.left + window.scrollX,
     y: linkCoords.top + window.scrollY
   };
   highlight.style.width = `${coords.width}px`;
   highlight.style.height = `${coords.height}px`;
   highlight.style.transform = `translate(
                                ${coords.x}px, 
                                ${coords.y}px)`;
};

triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));