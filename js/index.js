import photographersData from "./photographers.mjs";

 console.log(photographersData);
 
 // // create home page 
 

 const photographers = photographersData.photographers;

 let photographersHTML = "";
  
 
 
 photographers.forEach((photograph)=>{
   
   
      photographersHTML += `
         
      <div class="content__photographer__profile" >
      
      <a href="#">
      <img   src=../images/Photos/${photograph.portrait} alt="${photograph.alt}" />
      <h2> ${photograph.name}</h2>  
      </a>
 
     <h3> ${photograph.city}</h3>
     <p> ${photograph.tagline}</p>
     <h4>${photograph.price}</h4>
   
     <div class="content__photographer>
          ${ photograph.tags.map((tags)=>{
                          
             return `<div class="content__photographer__profile__tag" >
             <ul>
                 <li class="header__navigation__item">
                     <a  role="link" href="#"># ${tags}</a>
                    
                 </li>
             </ul>
     
              </div>  `
                       
              }).join(" ")
           }
           
      </div>
      `
 });
 
 document.querySelector("#photographers").innerHTML = photographersHTML;
