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
    // document.getElementById('date').innerText = date.toLocaleTimeString()

document.getElementById('completed-btn').addEventListener('click', function(){
    const fixMobile = document.getElementById('fix-mobile').innerText;
    const time = new Date();
    const container = document.getElementById('active-container');
    const p = document.createElement('p');
    p.innerText = `
    You have completed The ${fixMobile} at ${time.toLocaleTimeString()} 
    `
    container.appendChild(p);
})