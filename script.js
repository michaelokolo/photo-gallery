let pictures = [
    {url: "photo1.jpg"},
    {url: "photo2.jpg"},
    {url: "photo3.jpg"},
    {url: "photo4.jpg"},
    {url: "photo5.jpg"},
    {url: "photo6.jpg"},
    {url: "photo7.jpg"},
    {url: "photo8.jpg"}
]

let arrowLeft = document.querySelector('.arrow-back i');
let arrowRight = document.querySelector('.arrow-front i');
let picture = document.querySelector('img');



picture.src = pictures[0]['url'];
let i = 0;
arrowRight.addEventListener('click', () => {
    i++
    if(i === pictures.length){
        i = 0;
    }
    picture.src = pictures[i]['url'];
   
})

arrowLeft.addEventListener('click', () => {
    i--
    if(i <= 0){
        i = 0;
    }
    picture.src = pictures[i]['url'];
    
})