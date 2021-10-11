
import photographersData from "./photographers.mjs";

console.log(photographersData.photographers)

const photographersDomNode = document.querySelector("#photographers");
 
 // // create home page 
 

 const photographers = photographersData.photographers;

 let photographersHTML = "";
  
 
 
 photographers.forEach((photograph)=>{
   
   
      photographersHTML += `
         
      <div class="content__photographer__profile" >
      
      <a href="#">
      <img src=../images/Photos/${photograph.portrait} alt="${photograph.alt}" />
      <h2> ${photograph.name}</h2>  
      </a>
 
      <h3> ${photograph.city}</h3>
      <p> ${photograph.tagline}</p>
      <h4>${photograph.price}</h4>
     
     <div class="content__photographer__profile">
          ${ photograph.tags.map((tags)=>{
                          
             return `  <div class="content__photographer__profile__tag" aria-label="Tags correspondants au profil du photographe">
             <ul>
                 <li class="header__navigation__item" >
                     <a role="link" href="#">#${tags}</a>
                 </li>
     
      </div>  `
     

                       
              }).join(" ")
           }
           
      </div>
              
      `
 });

 
 photographersDomNode.innerHTML = photographersHTML;

 document.querySelector("#tags").addEventListener("click", (event)=>{

       if(event.target !== event.currentTarget){

            import("./filters.js").then((module)=>{

                 const resultFilter = module.default(event.target?.dataset?.tag);

                 if(resultFilter.length !== 0){

                      console.log(resultFilter);// Afficher le html des photographes

                 }

            });


       }

       return false;

 });
 

//  const arr = photographersData.photographers.tags;
 



//  photographersDomNode.addEventListener("click", (event)=>{
     
     
//      if(event.target !== event.currentTarget){
           
//             let filter = event.target?.dataset?.tags;
            
//             console.log(filter);
     
//             let resultFilter = arr.filter((photographerId)=>{
 
//                   if(photographerId.includes(filter) === true){
 
//                         return  photographerId;
 
//                   }
                  
//             });
       
            
       
//      }
 
//  });
 


//  document.querySelector("#tags").addEventListener("click", ()=>{
  
//   return photographersDomNode.innerHTML(resultFilter());

// });


// let photographersFilterHTML = "";

// arr.resultFilter((ph)=>{ photographersFilterHTML +=  `
         
// <div class="content__photographer__profile" >

// <a href="#">
// <img src=../images/Photos/${ph.portrait} alt="${ph.alt}" />
// <h2> ${ph.name}</h2>  
// </a>

// <h3> ${ph.city}</h3>
// <p> ${ph.tagline}</p>
// <h4>${ph.price}</h4>

// <div class="content__photographer__profile">
//     ${ ph.tags.map((tags)=>{
                    
//        return `  <div class="content__photographer__profile__tag" aria-label="Tags correspondants au profil du photographe Marcel Nikolic">
//        <ul>
//            <li class="header__navigation__item" >
//                <a role="link" href="#">#${tags}</a>
//            </li>

// </div>  `
                 
//         }).join(" ")
//      }
     
// </div>
        
// `
//     });
// document.querySelector("#tags").addEventListener("click", (event)=>{

//     if(event.target !== event.currentTarget){
         
//           return document.querySelector("#photographers").innerHTML( photographersFilterHTML);

//           // alert(event.target.innerText);
          
//           }

// });


 