const reviewContainer = document.getElementById('review-container');

const reviews = [
    {
        img: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt: "Profile picture of Indyah Almay",
        text: "I really enjoyed this course! It was fun and interactive as well as educational. I learnt a lot",
        name: "Indyah Almay"
    },
    {
        img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Profile picture of Stephanie Liverani",
        text: "It was really awesome, don't hesitate and try it on your own!",
        name: "Stephanie Liverani"
    },
    {
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Profile picture of Christina Kubow",
        text: "This inspired me, i would take it again!",
        name: "Christina Kubow"
    },
]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseleave', blurCard)


        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', review.img)
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = review.text;
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        nameContainer.textContent = review.name;


        cardElement.append(imageContainer, paragraphElement, nameContainer)
        reviewContainer.append(cardElement)
    })
}

populateDisplay()


function showCard() {
    this.classList.add('active')
}

function blurCard() {
    this.classList.remove('active')
}