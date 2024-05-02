const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('#year');
yearElement.textContent = `\u00A9${currentYear}`;

let oLastModif = new Date(document.lastModified);
const lastModifiedElement = document.querySelector('#lastModified');
lastModifiedElement.textContent = `Last Modification: ${oLastModif}`;