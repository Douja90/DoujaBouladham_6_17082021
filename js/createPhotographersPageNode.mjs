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
            
            <h1 class="presentation_photographer_name">  ${photograph.name}</h1>
            <h2 class="presentation_photographer_location"> ${photograph.city}</h2>
            <h3 class="presentation_photographer_description">${photograph.tagline}</h3>
            <div class="presentation_photographer_tags">
            ${photograph.tags.map((tags)=>{
                                
                return `<div class="content__photographer__profile__tag" aria-label="Tags correspondants au profil du photographe">
                <ul>
                <a class="presentation_photographer_tags" role="link">#${tags}</a>  
                </ul>    
        
        </div>  `
     
                }).join(" ")
            }
            </div>
        </div>
        <button class="presentation_contact"><h3>Contactez-moi</h3></button>
        <img class="presentation_profilepicture" src=../images/Photos/${photograph.portrait} alt="${photograph.alt}" />
        <footer class="footer footer--photographerpage">
        <div class="bottom_bar">
            <div class="bottom_bar_likes">
                <h2 class="bottom_bar_likes_number" aria-label="Nombre total de likes du photographe"></h2>
                <div class="bottom_bar_likes_heart">
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <h2 class="bottom_bar_price" aria-label="Prix journalier du photographe">${photograph.price}</h2>
        </div>
    </footer>
            `
            
    });

    return  photographerHTML;
    
}

