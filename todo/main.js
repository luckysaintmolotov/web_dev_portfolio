function createPlaceholderCard(){
    const container = document.getElementById("mid-container")
    const card = document.createElement('div');
    card.classList.add('card');
    const cardH1 = document.createElement('h1');
    cardH1.textContent= "Cat Husbandry"
    const cardDate = document.createElement('h5');
    cardDate.textContent= "2025-10-15"
    const cardDescription = document.createElement('p');
    cardDescription.textContent = "Feed the cat with appropriate food and fresh water";
        const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', function(){
        card.remove()
})

    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener('click', function(){
    card.classList.toggle('completed')
    });
    card.appendChild(cardH1);
    card.appendChild(cardDate);
    card.appendChild(cardDescription);
    container.appendChild(card);
    card.appendChild(deleteBtn)
    card.appendChild(completeBtn)

};

document.addEventListener('DOMContentLoaded',createPlaceholderCard)

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("task-description").value;
    const date = document.getElementById("task-date").value;
    
    const card = document.createElement('div');
    card.classList.add('card');

    const cardH1 = document.createElement('h1');
    cardH1.textContent= name;
    card.appendChild(cardH1);

    const cardDate = document.createElement('h5');
    cardDate.textContent= date;
    card.appendChild(cardDate);
    
    const cardDescription = document.createElement('p');
    cardDescription.textContent= description;
    card.appendChild(cardDescription);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', function(){
        card.remove()
    })
    card.appendChild(deleteBtn)
    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener('click', function(){
    card.classList.toggle('completed');
    
    });
    card.appendChild(completeBtn)
    
    const midContainer = document.getElementById("mid-container");
    midContainer.appendChild(card);
});