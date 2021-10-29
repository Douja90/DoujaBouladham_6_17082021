
import photographersData from "./photographers.mjs";
import createPhotographersDom from "./createPhotographersNode.mjs";

const photographersDomNode = document.querySelector("#photographers");


 
 // // create home page 
 

 const photographers = photographersData.photographers;
 
 
 photographersDomNode.innerHTML = createPhotographersDom(photographers);

 

 document.querySelector("#tags").addEventListener("click", (event)=>{

       if(event.target !== event.currentTarget){

            import("./filters.js").then((module)=>{

                const resultFilter = module.default(event.target?.dataset?.tag);
                 
                 if(resultFilter.length !== 0){

                    photographersDomNode.innerHTML = createPhotographersDom(resultFilter);

                 } 
                 

            });


       }

       return false;

 });
 



 