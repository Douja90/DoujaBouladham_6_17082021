console.log("Toto");
class ImageFactory {
  constructor(props) {
    this.src = props.image;
    this.alt = props.alt;
    this.id = props.id;
    this.type = "image";
  }

  /**
   * Create the DOM element for thumbnail - img
   *
   * @return  {object}  The created element
   */
  createElt() {
    const elt = createImgElt(`images/${this.src}`, `${this.alt}, closeup view`);
    elt.setAttribute("role", "button");

    return elt;
  }

  /**
   * Create the DOM element for full size - img
   *
   * @return  {object}  The created element
   */
  createFullElt() {
    const elt = createImgElt(`images/${this.src}`, this.alt);
    elt.setAttribute("id");

    return elt;
  }
}

class VideoFactory {
  constructor(props) {
    this.src = props.video;
    this.alt = props.alt;
    this.id = props.id;
    this.type = "video";
  }

  /**
   * Logic for DOM creation - video
   *
   * @param   {string}  text  The alt text to add
   *
   * @return  {object}        The DOM element created
   */
  domCreation(text) {
    let elt = createTextualElt("video", text, "video-elt");
    let srcElt = document.createElement("source");
    srcElt.setAttribute("src", `videos/${this.src}`);
    elt.appendChild(srcElt);

    return elt;
  }

  /**
   * Create the DOM element for thumbnail - video
   *
   * @return  {object}  The created element
   */
  createElt() {
    const elt = this.domCreation(`${this.alt}, closeup view`);
    elt.setAttribute("role", "button");

    return elt;
  }

  /**
   * Create the DOM element for full size - video
   *
   * @return  {object}  The created element
   */
  createFullElt() {
    let elt = this.domCreation(this.alt);
    elt.setAttribute("controls", true);
    elt.setAttribute("id", "current-media-lightbox");

    return elt;
  }
}

/**
 * Creates an element with a class
 *
 * @param   {string}  eltTag    tag to create
 * @param   {string}  eltClass  class to add to the tag
 *
 * @return  {object}            created element
 */
 const createEltWithClassName = (eltTag, eltClass) => {
  const elt = document.createElement(eltTag);
  elt.classList.add(eltClass);

  return elt;
};

/**
 * Create a link element with href and title attributes
 *
 * @param   {string}  linkHref   link href
 * @param   {string}  linkTitle  link title
 *
 * @return  {object}             created element
 */
const createLinkElt = (linkHref, linkTitle) => {
  const elt = document.createElement("a");
  elt.setAttribute("href", linkHref);
  elt.setAttribute("title", linkTitle);

  return elt;
};

/**
 * Create an img element with src and alt attributes
 *
 * @param   {string}  imgSrc  img src
 * @param   {string}  imgAlt  img alt text
 *
 * @return  {object}          created element
 */
const createImgElt = (imgSrc, imgAlt) => {
  const elt = document.createElement("img");
  fillImgElt(elt, imgSrc, imgAlt);

  return elt;
};

/**
 * Create textual element with content and class
 *
 * @param   {string}  eltTag      tag to create
 * @param   {string}  eltContent  text content to add to the tag
 * @param   {string}  eltClass    class to add to the tag
 *
 * @return  {elt}              created element
 */
const createTextualElt = (eltTag, eltContent, eltClass) => {
  const elt = createEltWithClassName(eltTag, eltClass);
  fillEltWithText(elt, eltContent);

  return elt;
};

/**
 * Create a list of interactive tag elements
 *
 * @param   {object}  parentElt  element to add child to
 * @param   {string}  eltText    text to add to the created element
 *
 * @return  {void}
 */
const createInteractiveListElt = (parentElt, eltText, hrefURL) => {
  const liElt = document.createElement("li");
  const aElt = createEltWithClassName("a", "filter-tag");
  aElt.setAttribute("href", hrefURL);
  aElt.setAttribute("title", eltText);
  aElt.textContent = eltText;

  liElt.appendChild(aElt);

  parentElt.appendChild(liElt);
};

/**
 * Get parameter value from URL
 *
 * @param   {string}  urlString  full URL path
 * @param   {string}  param      parameter to get value of
 *
 * @return  {string}             value of the parameter for the given URL
 */
const getParamFromUrl = (urlString, param) => {
  const url = new URL(urlString);
  const paramValue = url.searchParams.get(param);

  return paramValue;
};

/**
 * Fill element with text
 *
 * @param   {object}  elt   Element to add text to
 * @param   {string}  text  Text to add to the element
 *
 * @return  {object}        The updated element
 */
const fillEltWithText = (elt, text) => {
  elt.textContent = text;

  return elt;
};

/**
 * Fill img element
 *
 * @param   {object}  elt     Image element to update
 * @param   {string}  imgSrc  Img src
 * @param   {string}  imgAlt  Img alt text
 *
 * @return  {object}          The updated img element
 */
const fillImgElt = (elt, imgSrc, imgAlt) => {
  elt.setAttribute("src", imgSrc);
  elt.setAttribute("alt", imgAlt);

  return elt;
};

/**
 * Build DOM photographer Element
 *
 * @param {object} data The database model
 *
 * @return {object} The element created
 */
  createPhotographerElt = (data) => {
  const articleElt = createEltWithClassName("article", "photographers-elt");
  const aElt = createLinkElt(`photographer-page.html?id=${data.id}`, data.name);
  const pElt = createEltWithClassName("p", "infos");
  const ulElt = createEltWithClassName("ul", "tags");
  ulElt.classList.add("ph-elt-tags");
  articleElt.appendChild(aElt);
  articleElt.appendChild(pElt);
  articleElt.appendChild(ulElt);

  const imgElt = createImgElt(`../images/${data.portrait}`, "");
  const h2Elt = createTextualElt("h2", data.name, "photographer-name");
  aElt.appendChild(imgElt);
  aElt.appendChild(h2Elt);

  const cityElt = createTextualElt(
    "span",
    `${data.city}, ${data.country}`,
    "infos-city"
  );
  const taglineElt = createTextualElt("span", data.tagline, "infos-tagline");
  const priceElt = createTextualElt(
    "span",
    `${data.price}€/jour`,
    "infos-price"
  );
  pElt.appendChild(cityElt);
  pElt.appendChild(taglineElt);
  pElt.appendChild(priceElt);

  data.tags.forEach((tag) =>
    createInteractiveListElt(ulElt, tag, "index.html")
  );

  return articleElt;
};

/**
 * DOM Elements
 */
 const tagsElt = document.getElementById("tags");
 const photographersElt = document.getElementById("photographers");
 
 /**
  * Photographers data
  *
  * @const {Array}
  */

 
 /**
  * Manage the whole toggle logic to display correct photographers in the DOM
  *
  * @param   {object}  evt  event
  *
  * @return  {void}
  */
 const toggleFilter = (evt) => {
   evt.preventDefault();
   const selectedTag = getClassToToggle(evt.target);
   addTagParamToURL(selectedTag);
   toggleNavSelectedTags();
   const tagsInURL = getParamsFromURL("tag");
   const photographerToDisplay = getFilteredPhotographers(tagsInURL);
 
   displayFilteredPhotographers(photographerToDisplay);
   toggleEltSelectedTags();
 
   const tagsListElts = document.querySelectorAll(".ph-elt-tags");
   tagsListElts.forEach((elt) => elt.addEventListener("click", toggleFilter));
 };
 
 /**
  * Get the class that was clicked
  *
  * @param   {object}  target  the element that was clicked
  *
  * @return  {string}          the tag clicked
  */
 const getClassToToggle = (target) => {
   let tagSelected = "";
   if (target.tagName === "A") tagSelected = target.textContent;
   if (target.tagName === "LI") tagSelected = target.lastChild.textContent;
 
   return tagSelected.toLowerCase();
 };
 
 /**
  * Get the params from the current URL
  *
  * @param   {string}  param  the name of the param to search for
  *
  * @return  {array}          The list of params included in the URL
  */
 const getParamsFromURL = (param) => {
   const currentPath = window.location.href;
   const currentParams = new URL(currentPath).searchParams;
 
   return currentParams.getAll(param);
 };
 
 /**
  * Add a new tag to the current URL
  *
  * @param   {string}  tagToAdd  the tag to add to the URL
  *
  * @return  {void}
  */
 const addTagParamToURL = (tagToAdd) => {
   if (tagToAdd == "") return;
 
   let url = "index.html";
   let tagParams = getParamsFromURL("tag");
 
   if (tagParams.includes(tagToAdd))
     tagParams = tagParams.filter((tag) => tag !== tagToAdd);
   else tagParams.push(tagToAdd);
 
   tagParams.forEach((tag, index) => {
     if (index === 0) url += `?tag=${tag}`;
     else url += `&tag=${tag}`;
   });
   window.history.pushState({}, "", url);
 };
 
 /**
  * Toggle the selected class to the tags on the main navbar
  *
  * @return  {void}
  */
 const toggleNavSelectedTags = () => {
   const tagParams = getParamsFromURL("tag");
   tagsElt.childNodes.forEach((elt) => {
     if (tagParams.includes(elt.lastChild.textContent.toLowerCase()))
       elt.classList.add("selected");
     else elt.className = "";
   });
 };
 
 
 /**
  * Create the DOM with the photographer elements to display
  *
  * @param   {array}  photographerToDisplay  List of photographers to display in the HTML page
  *
  * @return  {void}
  */
 const displayFilteredPhotographers = (photographerToDisplay) => {
   photographersElt.innerHTML = "";
   photographerToDisplay.forEach((photographer) =>
     photographersElt.appendChild(createPhotographerElt(photographer))
   );
 };
 
 /**
  * Toggle the selected class to the tags on the photograhers' elements
  *
  * @return  {void}
  */
 const toggleEltSelectedTags = () => {
   const tagParams = getParamsFromURL("tag");
   const phTagsElts = document.querySelectorAll(".ph-elt-tags li");
   phTagsElts.forEach((elt) => {
     if (tagParams.includes(elt.lastChild.textContent.toLowerCase()))
       elt.classList.add("selected");
     else elt.className = "";
   });
 };
 
 /**
  * Generate an array of photographers to display based on a given array of tags
  *
  * @param   {array}  tagsList  The list of filtering tags
  *
  * @return  {[type]}
  */
 const getFilteredPhotographers = (tagsList) => {
   let photographersToDisplay = photographers;
   photographersToDisplay = photographersToDisplay.filter((photographer) => {
     for (let i = 0; i < tagsList.length; i++) {
       if (!photographer.tags.includes(tagsList[i])) return false;
     }
     return true;
   });
 
   return photographersToDisplay;
 };
 
 /**
  * Display the filtered photographers based on the params in the URL (page creation)
  *
  * @return  {void}
  */
 const checkFilterOnPageCreation = () => {
   toggleNavSelectedTags();
   const tagsInURL = getParamsFromURL("tags");
   const photographerToDisplay = getFilteredPhotographers(tagsInURL);
 
   displayFilteredPhotographers(photographerToDisplay);
   toggleEltSelectedTags();
 
   const tagsListElts = document.querySelectorAll(".ph-elt-tags");
   tagsListElts.forEach((elt) => elt.addEventListener("click", toggleFilter));
 };


 

const path = window.location.pathname;

if (path.includes("photographer-page.html")) createPhotographerPage();
else {
  const linkElt = document.getElementById("link-content");
  createHomepage();
  document.addEventListener("scroll", manageContentNav);
  linkElt.addEventListener("focus", () => (linkElt.style.top = "6px"));
  linkElt.addEventListener("blur", () => (linkElt.style.top = "-100px"));
  
}

 
 
function manageContentNav() {
  const linkElt = document.getElementById("link-content");
  const bannerElt = document.getElementById("header-banner");

  if (window.scrollY >= bannerElt.offsetHeight - 20) {
    linkElt.style.top = "6px";
  }
  if (window.scrollY < bannerElt.offsetHeight - 20) {
    linkElt.style.top = "-100px";
  }
}
