let welcomeDiv = document.querySelector('#welcomeDiv');

function expand () {
  document.body.classList.toggle('expand')
}

function showDiv() {
  const btn = document.getElementById('btn');

    //hide button
    btn.style.display = 'none';
   
    welcomeDiv.classList.add('visible');

 


};