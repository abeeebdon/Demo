import sideBar from "./face-book.js"
import status from "./status.js";
import onlineUsers from "./onlineContact.js"
import nf from "./newsFeed.js"

// the next array loop into the aside on the user interface
sideBar.map((sides) => {
  const { name, icon } = sides;
  const fb_sideBars = document.createElement("div");
  const asideElement = document.querySelector(".aside-elements");
  asideElement.appendChild(fb_sideBars);
  fb_sideBars.innerHTML = `<div class="aside-menu" id="friends">
                  <div class="flex-1">
                    <div class="icon-wrapper-aside">
                      <span class="${icon}"></span>
                    </div>
                  </div>
                  <div class="flex-2">
                    <p class="aside-paragraph">${name}</p>
                  </div>
                </div>`;
});


// outputing newsfeed 

// the array for the newsfeed will be imported from newsFeed.js
nf.map((newsFeed)=>{
    const {index, username, user, imgsrc, src}= newsFeed;
    const news= document.querySelector(".newsfeed-posts")
    const statuss=document.createElement("div");
    news.appendChild(statuss)
    statuss.innerHTML=`<div class="newsfeed-container">
    <section class="newsfeed-section">
        <div class="news-head-wrap">
          <div>
            <div class="news-images">
              <img
                src="${src}"
                alt="img${index}"
                class="news-image"
              />
            </div>
            <div class="news-head">
              <h3 class="news-head-item">${username}</h3>
              <br />
              <p class="news-head-item">${user}</p>
            </div>
          </div>
          <div class="news-icon">
            <span class="fa-solid fa-ellipsis"></span>
            <span class="fa-solid fa-cross"></span>
          </div>
      </div>
    </section>
    <section class="newsfeed-section">
        <div class="news-outlet">
          <div class="news-outlet-image">
            <img src="${imgsrc}" alt="News image" class="imgPost" />
          </div>
        </div>
      
    </section>
    <section class="news">
      <div class="comments-reactions">
        <div class="like-reactions">
          <span>emoji</span>
          <span>emoji</span>
        </div>
        <div class="comments">
          <p><span id="later">156</span>comments</p>
        </div>
      </div>
    </section>
    <hr />
    <section>
      <div class="like-comment-send">
        <div>
          <div>
            <span></span>
          </div>
          <p>Like</p>
        </div>
        <div id="comment">
          <div>
            <span></span>
          </div>
          <p>Comment</p>
        </div>
        <div id="send">
          <div>
            <span></span>
          </div>
          <p>Send</p>
        </div>
      </div>
    </section>
  </div>`
  
})

status.map((stat) => {
  const {src, link}=stat;
  const statusHolder= document.querySelector(".story-videos-list")
  const statuss=document.createElement("div");
  statusHolder.appendChild(statuss)
  statuss.innerHTML=`<div class="story-video-container">
                      <div class="story-videos">
                        <a href="${link}">
                          <img
                            src="${src}"
                            class="videos"
                          >
                        </a>
                      </div>
                    </div>`
})
onlineUsers.map((online) => {
  const {username, src}= online;
  const statusHolder= document.querySelector(".online-contacts")
  const statuss=document.createElement("div");
  statusHolder.appendChild(statuss)
  statuss.innerHTML=`<div class="online-contacts-wrapper">
  <img
    src="${src}"
    width="45px"
    height="45px"
    class="online-contacts-images"
    alt="img1"
  />
  <p class="online-user">${username}</p>
</div>`
})

