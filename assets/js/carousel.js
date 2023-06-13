const nextBooks = [
  {
    id: 1,
    name: "The weapons of persuasion 2.0",
    author: "Robert Cialdini ",
    pages: 656,
    img: "./assets/img/TheWeaponsOfPersuasion.jpg",
    category: "Mindset",
  },
  {
    id: 2,
    name: "The Psychology of Money",
    author: "Morgan Housel",
    pages: 304,
    img: "./assets/img/MorganHousel.jpg",
    category: "Financial Education",
  },
  {
    id: 3,
    name: "Atomic Habits",
    author: "James Clear",
    pages: 320,
    img: "./assets/img/AtomicHabits.jpg",
    category: "Mindset",
  },
  {
    id: 3,
    name: "Clean Code",
    author: "Robert C. Martin",
    pages: 425,
    img: "./assets/img/CleanCode.jpg",
    category: "Programming",
  },
  {
    id: 5,
    name: "Principles",
    author: "Ray Dalio ",
    pages: 592,
    img: "./assets/img/RayDalio.jpg",
    category: "Financial Education",
  },
  {
    id: 6,
    name: "Programming Logic and Algorithms with JavaScript",
    author: "Edécio Fernando Iepsen",
    pages: 352,
    img: "./assets/img/LogicJS.jpg",
    category: "Programming",
  },
  {
    id: 7,
    name: "Essentialism",
    author: "Greg McKeown",
    pages: 272,
    img: "./assets/img/Essentialism.jpg",
    category: "Mindset",
  },
  {
    id: 8,
    name: "Data Structures and Algorithms with JavaScript",
    author: "Loiane Groner",
    pages: 408,
    img: "./assets/img/DataStructuresJS.jpg",
    category: "Programming",
  }
]

window.addEventListener("DOMContentLoaded", function(){
  displayNextItems(nextBooks)
})

const divContainer = document.querySelector(".carousel__div");

function displayNextItems(nextItems) {
  
  let nextItem = nextItems.map(function(item){

    return `<div class="carousel__slides carousel__disappear">  
              <div class="carousel__box">
                <img class="carousel__img" src="${item.img}" >
                <div class="carousel__desc">
                  <p class="carousel__name">${item.name}</p>
                  <p>Author: ${item.author}</p>
                  <p>Pages: ${item.pages}</p>
                  <p>Theme: ${item.category}</p>
                </div>
              </div>
          </div>`
  })

  nextItem = nextItem.join("")

  divContainer.innerHTML = nextItem
  showSlides(slideIndex)

  const prev = document.querySelector(".carousel__prev")
  const next = document.querySelector(".carousel__next")

  prev.addEventListener("click", function(){
      plusSlides(-1)
  })

  next.addEventListener("click", function(){
      plusSlides(1)
  })
}

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel__slides")

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }

    slides[slideIndex-1].style.display = "block"
}

const timer = setInterval(function(){
  plusSlides(1)
}, 15000) 