const list = [
    {
        id: 1,
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        category: "Financial Education",
        pages: 336,
        img: './assets/img/RichDadPoorDad.jpg',
        desc: 'A book that presents the difference in mindset between two fathers regaring money and their teachings to their children.',
    },
    {
        id: 2,
        title: 'The Richest Man in Babylon',
        author: 'George S. Clason',
        category: "Financial Education",
        pages: 160,
        img: './assets/img/TheRichestManInBabylon.jpg',
        desc: 'A classic on how to multiply wealth and solve financial problems. Based on the success secrets of the ancient Babylonians.'
    },
    {
        id: 3,
        title: 'Outwitting the Devil',
        author: 'Napoleon Hill',
        category: "Mindset",
        pages: 208,
        img: './assets/img/OutwittingTheDevil.jpg',
        desc: "After 75 years of secrecy, through this exclusive interview, Napoleon Hill breaks the secret code of the Devil's mind.",
    },
    {
        id: 4,
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        category: 'Mindset',
        pages: 368,
        img: './assets/img/ThinkAndGrowRich.jpg',
        desc: "The book proves that Napoleon Hill's philosophy of personal achievement remains relevant and still guides those who are successful.",
    },
    {
        id: 5,
        title: 'The Most Important Thing',
        author: 'Howard Marks',
        category: "Investments",
        pages: 208,
        img: './assets/img/TheMostImportantThing.jpg',
        desc: 'Describes the key to successful investment and warns about pitfalls that can destroy capital. Provides valuable lessons on decision-making and risk management.',
    },
    {
        id: 6,
        title: 'The Intelligent Investor',
        author: 'Benjamin Graham',
        category: "Investments",
        pages: 672,
        img: './assets/img/TheIntelligentInvestor.jpg',
        desc: 'His concept of "value investing" protects investors from making substantial mistakes and teaches them to develop long-term strategies.',
    },
    {
        id: 7,
        title: "Meditations",
        author: "Marco Aurélio",
        category: "Philosophy",
        pages: 127,
        img: "./assets/img/MarcoAurelio.jpg",
        desc: "Considered a unique work in the history of Philosophy, Meditations contains the most profound and revealing spiritual and ethical reflections ever recorded."
    },
    {
        id: 8,
        title: "About the brevity of life",
        author: "Seneca",
        category: "Philosophy",
        pages: 94,
        img: "./assets/img/Seneca.jpg",
        desc: "One of Seneca's most well-known works is also a moral essay that brings powerful reflections on death, human nature, and the art of living."
    },
    {
        id: 9,
        title: "The art of vivier",
        author: "Epiteto",
        category: "Philosophy",
        pages: 77,
        img: "./assets/img/Epiteto.jpg",
        desc: "Epicteto was a lecturer who left no philosophical writings. Fortunately, the main aspects of his philosophy were preserved for future generations by one of his dedicated students."
    },
    {
        id: 10,
        title: "365 Stoic Reflections",
        author: "Stoics",
        category: "Philosophy",
        pages: 142,
        img: "./assets/img/365.jpg",
        desc: "365 teachings from the most famous representatives of Stoicism, including Zenão, Heráclito, Seneca, and Marco Aurélio. These are knowledge that transcend time."
    },
    {
        id: 11,
        title: "Lifelong Learners",
        author: "Conrado Schlochauer",
        category: "Mindset",
        pages: 256,
        img: "./assets/img/LifelongLearners.jpg",
        desc: "The speed of change in the world is no longer a novelty, but it still scares. The only way to keep up with the transformation of the world is to develop the habit of always learning."
    }

]

const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')

window.addEventListener("DOMContentLoaded", function(){
    displayListItems(list)
    displayListButtons()
})

function displayListItems (listItems) {

    let displayList = listItems.map(function(item){
        return `<article class="list-item list-show">
                    <img src="${item.img}" alt="Photo" class="item-photo">
                    <div class="item-info">
                        <header>
                            <h4 class="item-title">${item.title}</h4>
                            <h4 class="item-author">${item.author}</h4>
                            <h4 class="item-pages">Pages: ${item.pages}</h4>
                        </header>
                        <p class="item-desc">${item.desc}</p>
                    </div>
                </article>`
    })

    displayList = displayList.join('')
    sectionCenter.innerHTML = displayList
}

function displayListButtons() {
    const categories = list.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    },['All'])

    const categoryBtns = categories.map( 
        function(category){
            return `<button type="button" class="filter-btn" data-id="${category}">
            ${category}
          </button>` 
    }).join('')

    btnContainer.innerHTML = categoryBtns

    const filterBtns = btnContainer.querySelectorAll('.filter-btn')

    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
          
          const category = e.currentTarget.dataset.id
          const listCategory = list.filter(function (listItem){
    
            if(listItem.category === category){
              return listItem;
            } 
          })
    
          if(category === 'All'){
            displayListItems(list)
          } else {
            displayListItems(listCategory)
          }
        })
      }
    )}