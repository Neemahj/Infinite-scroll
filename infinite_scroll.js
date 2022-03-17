const container = document.querySelector('.container');

window.addEventListener('scroll',function(){
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;

  if( (scrollTop + clientHeight) > (scrollHeight - 5)){
      createPost()
  }
});

function createPost(){
  const post = document.createElement('div');
  post.className = "contains";
  post.innerHTML = `<div class="images">
    <img src="./animal images/lion.jpg" alt="Lion">
    </div>
    <div class="images">
    <img src="./animal images/wolf2.jpeg" alt="Wolf">
    </div>
    <div class="images">
    <img src="./animal images/whitelion.jpeg" alt="White lion">
    </div>`

    container.appendChild(post)


}