import filterPhotographerById from "./filterPhotographers.mjs";

const {medias, infos} = filterPhotographerById();

export default function likes(){
//Element du DOM
const bottomBarLikesNumber = document.querySelector(".bottom_bar_likes_number");

// Nombre totale des likes dans le footer pour chaque photographe
function likeTotal() {
    let totalLikes = 0;
        for(let media of medias){
            totalLikes += media.likes;
        }
        bottomBarLikesNumber.innerHTML = totalLikes;
}

likeTotal();

// Mettre à jour le nombre total des likes
function listenToHeartsEvents() {

    const galleryElementLikesHearts = document.querySelectorAll(".gallery_element_legend_likes_heart");
    const photographerTotalLikes = document.querySelector(".bottom_bar_likes_number");

    // Augmenter le nombre des likes suite à l'évenement click de l'utilisateur!!!
    galleryElementLikesHearts.forEach(function(heart) {

        heart.addEventListener("click", function() {
            let likesNumber = heart.parentNode.children[0];
            likesNumber.innerHTML = parseInt(likesNumber.innerHTML) + 1;
            photographerTotalLikes.innerHTML = parseInt(photographerTotalLikes.innerHTML) + 1;
        })
        heart.addEventListener("keydown", function(event) {
            if (event.key == "Enter") {
                let likesNumber = heart.parentNode.children[0];
                likesNumber.innerHTML = parseInt(likesNumber.innerHTML) + 1;
                photographerTotalLikes.innerHTML = parseInt(photographerTotalLikes.innerHTML) + 1;
            }
        })
    })
}

listenToHeartsEvents();

}
