/** 
   * Cette fonction qui cree du HTML
   * @param {array} arr
   * @return {html}

*/

export default function createPhotographerPageDom(arr){

    let photographerHTML = "";

    arr.forEach((photograph)=>{
        
        
            photographerHTML += `

            <div class="presentation_photographer">
            <a href="./photographer-page.html?id=${photograph.id}">
            <h1 class="presentation_photographer_name">  ${photograph.name}</h1>
            <h2 class="presentation_photographer_location"> ${photograph.city}</h2>
            <h3 class="presentation_photographer_description">${photograph.tagline}</h3>
            <div class="presentation_photographer_tags">
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
        </div>
        <button class="presentation_contact"><h3>Contactez-moi</h3></button>
        <img class="presentation_profilepicture" src=../images/Photos/${photograph.portrait} alt="${photograph.alt}" />
                    
            `
            
    });

    return  photographerHTML;
    
}

