const imageContainerEl=document.querySelector(".image-container")
const btnEl=document.querySelector(".btn")

btnEl.addEventListener("click",()=>{
    for (let index = 0; index < 8; index++) {
        addNewImages();
    }
})

function addNewImages(){
    const newImgEl=document.createElement("img");
    newImgEl.src=`https://picsum.photos/200/300?random=${Math.floor(Math.random()*5000)}`;
    imageContainerEl.appendChild(newImgEl);
}
