const memeForm = document.getElementById('memeForm');
const memesContainer = document.getElementById('memesContainer');

memeForm.addEventListener('submit', function(event) {
    event.preventDefault();

   
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    const imageURL = document.getElementById('imageURL').value;

   
    if (!topText || !bottomText || !imageURL) {
        alert('Please fill out all fields');
        return;
    }

    
    memeForm.reset();

    
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

   
    const imgElement = document.createElement('img');
    imgElement.src = imageURL;

    
    const topTextSpan = document.createElement('span');
    topTextSpan.classList.add('top');
    topTextSpan.textContent = topText;

    
    const bottomTextSpan = document.createElement('span');
    bottomTextSpan.classList.add('bottom');
    bottomTextSpan.textContent = bottomText;

   
    memeDiv.appendChild(imgElement);
    memeDiv.appendChild(topTextSpan);
    memeDiv.appendChild(bottomTextSpan);

    memesContainer.appendChild(memeDiv);

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        memesContainer.removeChild(memeDiv);
    });

  
    memeDiv.appendChild(deleteButton);
});
