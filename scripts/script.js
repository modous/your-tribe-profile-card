

function expand () {
  document.body.classList.toggle('expand')
}

function showDiv() {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    //hide button
    btn.style.display = 'none';
    });
  document.getElementById('welcomeDiv').style.display = "block";

  


};