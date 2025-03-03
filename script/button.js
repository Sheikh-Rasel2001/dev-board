document.getElementById('completed-btn').addEventListener('click', function(){
    alert('Board updated Successfully');
    const fixMobile = document.getElementById('fix-mobile').innerText;
    const time = new Date();
    const container = document.getElementById('active-container');
    const p = document.createElement('p');
    p.innerText = `
    You have completed The ${fixMobile} at ${time.toLocaleTimeString()} 
    `
    container.appendChild(p);
   
})

document.getElementById('completed-btn1').addEventListener('click', function(){
    alert('Board updated Successfully');
    const addPay = document.getElementById('add-pay').innerText;
    const time = new Date();
    const container = document.getElementById('active-container');
    const p = document.createElement('p');
    p.innerText = `
    You have completed The ${addPay} at ${time.toLocaleTimeString()} 
    `
    container.appendChild(p);
})

document.getElementById('completed-btn2').addEventListener('click', function(){
    alert('Board updated Successfully');
    const addReaction = document.getElementById('add-reaction').innerText;
    const time = new Date();
    const container = document.getElementById('active-container');
    const p = document.createElement('p');
    p.innerText = `
    You have completed The ${addReaction} at ${time.toLocaleTimeString()} 
    `
    container.appendChild(p);
})

document.getElementById('completed-btn3').addEventListener('click', function(){
    alert('Board updated Successfully');
    const fixVideo = document.getElementById('fix-video').innerText;
    const time = new Date();
    const container = document.getElementById('active-container');
    const p = document.createElement('p');
    p.innerText = `
    You have completed The ${fixVideo} at ${time.toLocaleTimeString()} 
    `
    container.appendChild(p);
})

document.getElementById('completed-btn4').addEventListener('click', function(){
    alert('Board updated Successfully');
    const integrateAi = document.getElementById('integrate-ai').innerText;
    const time = new Date();
    const container = document.getElementById('active-container');
    const p = document.createElement('p');
    p.innerText = `
    You have completed The ${integrateAi} at ${time.toLocaleTimeString()} 
    `
    container.appendChild(p);
})

document.getElementById('completed-btn5').addEventListener('click', function(){
    alert('Board updated Successfully');
    const amiProbashi = document.getElementById('ami-probashi').innerText;
    const time = new Date();
    const container = document.getElementById('active-container');
    const p = document.createElement('p');
    p.innerText = `
    You have completed The ${amiProbashi} at ${time.toLocaleTimeString()} 
    `
    container.appendChild(p);
})

// activity clear
document.getElementById('clear-btn').addEventListener('click', function(){
    const activeContainer = document.getElementById('active-container');
    activeContainer.innerText = '';
})