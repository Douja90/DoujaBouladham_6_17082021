
/** 
   * Cette fonction qui cree du HTML
   * @param {array} arr
   * @return {html}

*/

export default function createPhotographersDom(arr){

    let photographersHTML = "";
  
    arr.forEach((photograph)=>{
        
        
            photographersHTML += `
            <section class=" photographers__home">    
            <div class="content__photographer__profile" >
            
            <a href="./photographer-page.html?id=${photograph.id}">
            <img src=../images/Photos/${photograph.portrait} alt="${photograph.alt}" />
            <h2> ${photograph.name}</h2>  
            </a>
        
            <h3> ${photograph.city}</h3>
            <p> ${photograph.tagline}</p>
            <h4>${photograph.price}</h4>
            
            <div >
                ${photograph.tags.map((tags)=>{
                                
                    return `  <div class="content__photographer__profile__tag" aria-label="Tags correspondants au profil du photographe">
                    <ul>
                        <li class="header__navigation__item" >
                            <a role="link" href="#">#${tags}</a>
                        </li>
            
            </div>  `
            

                            
                    }).join(" ")
                }
                
            </div>
            </section>
                    
            `
            
    });

    return photographersHTML;
}