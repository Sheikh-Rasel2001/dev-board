const body = document.getElementById('body');
const button = document.getElementById('theme-change');
const colors = ['lightblue', 'gray', 'lightgreen', 'yellow', 'pink' ]

button.addEventListener('click', function(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
})

// date object
const date = new Date();
    document.getElementById('date').innerText = date.toDateString();
    
document.getElementById('blogs').addEventListener('click', function(){
    window.location.href = 'blogs/index.html'
})
