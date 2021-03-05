const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBandNames = bands.sort((a, b) => {
  return strip(a) > strip(b) ? 1 : -1;
});

const bandsList = document.querySelector('.bandsList');

function populateBands() {
  bandsList.innerHTML = sortedBandNames.map(bandName => `<li>${bandName}</li>`).join('');
}

populateBands();