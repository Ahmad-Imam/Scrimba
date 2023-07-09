import { posts } from "./data.js";

function likeIncrease(post) {
  console.log(post);
}
function loadPage() {
  renderPosts();
}
loadPage();

function renderPosts() {
  document.querySelector(".post").innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    document.querySelector(".post").innerHTML += `<section class="post">
            <div class="post-header">
                <div>
                    <img class="post-header-user" src="${posts[i].avatar}">
                </div>
                <div class="post-header-info">
                    <div class="post-header-title">${posts[i].name}</div>
                    <div class="post-header-location">${posts[i].location}</div>
                </div>
            </div>
            <div>
                <img class="post-img" src="${posts[i].post}" ondblclick="likeIncrease(${posts[i].likes})">
            </div>
            <div class="post-icons">
                <img class="post-icon" src="images/icon-heart.png">    
                <img class="post-icon" src="images/icon-comment.png">    
                <img class="post-icon" src="images/icon-dm.png">    
            </div>
            <div class="post-like">
                ${posts[i].likes} likes
            </div>
            <div class="post-info">
                <span class="post-info-username">${posts[i].name}</span> ${posts[i].comment}
            </div>
             <div class="post-end">
            </div>
        </section>`;
  }
}

// console.log(posts[0].name)
