// const btn=document.getElementById("segmented-like-button")
const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));
let globalURL 



const newYoutubeProfileLoaded = () => {
  const youtubeBtnControls = document.querySelector(
    "#buttons.style-scope.ytd-c4-tabbed-header-renderer"
  );
  const bookmarkBtnExists =
    youtubeBtnControls.getElementsByClassName("bookmark-btn")[0];

  console.log(bookmarkBtnExists);
  if (!bookmarkBtnExists) {
    const bookmarkBtn = document.createElement("img");

    bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
    bookmarkBtn.className = "ytp-button " + "bookmark-btn";
    bookmarkBtn.title = "Click to bookmark current timestamp";

    // let youtubeBtnControls =
    // document.querySelector("#buttons.style-scope.ytd-c4-tabbed-header-renderer");
    console.log(youtubeBtnControls);

    bookmarkBtn.style.width = "30px";
    bookmarkBtn.style.paddingLeft = "20px";

    youtubeBtnControls.appendChild(bookmarkBtn);
    bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
  }
  // bookmarkBtn.addEventListener("click",()=> addEventListener(videoLink));
};

const newVideLoaded = () => {
  const youtubeBtnControls = document.querySelector(
    "#owner.item.style-scope.ytd-watch-metadata"
  );
  const bookmarkBtnExists =
    youtubeBtnControls.getElementsByClassName("bookmark-btn")[0];
  console.log(bookmarkBtnExists);
  if (!bookmarkBtnExists) {
    const bookmarkBtn = document.createElement("img");

    bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
    bookmarkBtn.className = "ytp-button " + "bookmark-btn";
    bookmarkBtn.title = "Click to bookmark current timestamp";

    console.log(youtubeBtnControls);

    bookmarkBtn.style.width = "30px";
    bookmarkBtn.style.paddingLeft = "20px";

    youtubeBtnControls.appendChild(bookmarkBtn);
    bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
  }
  // bookmarkBtn.addEventListener("click",()=> addEventListener(videoLink));
};

//Twitter Post(Tweet)
function addBookmark() {
  const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
  if (!bookmarkBtnExists) {
    console.log('makinn')
    const bookmarkBtn = document.createElement("img");
    wait(1000)
    const parentElement = document.querySelectorAll('.css-1dbjc4n.r-1oszu61.r-2sztyj.r-1efd50x.r-5kkj8d.r-1ta3fxp.r-18u37iz.r-h3s6tt.r-a2tzq0.r-3qxfft.r-s1qlax')[0];
    console.log(parentElement)
    parentElement.insertBefore(bookmarkBtn, parentElement.children[3])
    let str = ''
    str = document.querySelectorAll('.css-901oao.r-1nao33i.r-37j5jr.r-1inkyih.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0')[0].innerText
    bookmarkBtn.src = chrome.runtime.getURL('assets/bookmarkPINN.png')
    bookmarkBtn.style.width = '50px'
    bookmarkBtn.style.cursor = 'pointer'
    bookmarkBtn.title = "Click to bookmark this tweet";
    bookmarkBtn.className = 'css-1dbjc4n r-18u37iz r-1h0z5md ' + 'bookmark-btn';
    
    console.log('inserted')
    
    bookmarkBtn.addEventListener('click', () => {
      const newBookmark = {
        username: `@${location.href.split('.com/')[1].split('/status')[0]}`,
        tweetLink: location.href,
        tweet: str
      }
      console.log(newBookmark)
      // chrome.storage.sync.set({ newBookmark })
    })



  }
}

//LinkedIn Post
function linkedIn() {
  const parentDiv = document.getElementsByClassName("feed-shared-social-action-bar__action-button bookmark-btn")[0];
  //making button
  if (!parentDiv) {
    const element = document.querySelectorAll('.feed-shared-social-actions.feed-shared-social-action-bar.social-detail-base-social-actions.feed-shared-social-action-bar--full-width.feed-shared-social-action-bar--has-social-counts')
    for (let i = 0; i < element.length; i++) {
      const div = document.createElement('div')
      const bookmarkBtn = document.createElement("img");
      div.appendChild(bookmarkBtn)
      div.className = 'feed-shared-social-action-bar__action-button bookmark-btn'
      bookmarkBtn.style.display = 'block'
      bookmarkBtn.style.margin = '10px auto'
      bookmarkBtn.src = 'https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png'
      bookmarkBtn.style.width = '50px'
      bookmarkBtn.style.cursor = 'pointer'
      bookmarkBtn.title = "Click to bookmark this post";
      bookmarkBtn.className = 'feed-shared-social-action-bar__action-button ' + 'bookmark-btn'
      const child = element[i].children[1]
      element[i].insertBefore(div, child)
      bookmarkBtn.addEventListener('click', () => {
        const postId = element[i].parentElement.parentElement.parentElement.dataset.urn
        const postText = Array.from(element[i].parentElement.parentElement.childNodes).find(elem => elem.className === 'feed-shared-update-v2__description-wrapper').innerText;
        // const username = 
        const postInfo = {
          url: `https://www.linkedin.com/feed/update/${postId}`,
          content: postText
        }
        console.log(postInfo)
      })
      // bookmarkBtn.width = '60px'
    }

    const observer = new MutationObserver(function (mutations) {
      for (let mutation of mutations) {
        if (mutation.addedNodes) {
          for (let node of mutation.addedNodes) {
            if (node.matches && node.matches(".feed-shared-social-actions , .feed-shared-social-action-bar ,.social-detail-base-social-actions , .feed-shared-social-action-bar--full-width , .feed-shared-social-action-bar--has-social-counts")) {

              //checking if bookmark button exists on the first index of parentDiv as children
              const bookmarkBtnExists = node.children[1].className === 'feed-shared-social-action-bar__action-button ' + 'bookmark-btn'
              if (bookmarkBtnExists === false) {
                const div = document.createElement('div')
                const bookmarkBtn = document.createElement("img");
                div.appendChild(bookmarkBtn);
                div.className = 'feed-shared-social-action-bar__action-button bookmark-btn'
                bookmarkBtn.style.display = 'block'
                bookmarkBtn.style.margin = 'auto'
                const child = node.children[1]
                node.insertBefore(div, child)
                bookmarkBtn.src = 'https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png'
                bookmarkBtn.style.width = '50px'
                bookmarkBtn.style.cursor = 'pointer'
                bookmarkBtn.title = "Click to bookmark this post";
                bookmarkBtn.className = 'feed-shared-social-action-bar__action-button ' + 'bookmark-btn'
                bookmarkBtn.addEventListener('click', () => {
                  const postId = node.parentElement.parentElement.parentElement.dataset.urn
                  const postText = Array.from(node.parentElement.parentElement.childNodes).find(elem => elem.className === 'feed-shared-update-v2__description-wrapper').innerText;
                  // const username = 
                  const postInfo = {
                    url: `https://www.linkedin.com/feed/update/${postId}`,
                    content: postText
                  }
                  console.log(postInfo)
                })
              }
            }
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

async function go() {
  await waitForTimeline();
  console.log('refreshing')
  console.log(globalURL)
  await wait(500);
  if (globalURL.includes('/status/')) {
    console.log('tweet')
    addBookmark()
  }
  if (globalURL.includes('linkedin.com/feed/')) {
    console.log('feed')
    linkedIn()
  }

}

//waiting for content to get loaded 
async function waitForTimeline() {
  return new Promise((resolve, reject) => {
    const interval = setInterval(function () {
      let parentElement
      if (globalURL.includes('twitter.com')) {
        console.log('tweet')
        parentElement = document.querySelectorAll('.css-1dbjc4n.r-1oszu61.r-2sztyj.r-1efd50x.r-5kkj8d.r-1ta3fxp.r-18u37iz.r-h3s6tt.r-a2tzq0.r-3qxfft.r-s1qlax')[0]
      }
      if (globalURL.includes('linkedin.com/feed/')) {
        parentElement = document.querySelector('.feed-shared-social-actions.feed-shared-social-action-bar.social-detail-base-social-actions.feed-shared-social-action-bar--full-width.feed-shared-social-action-bar--has-social-counts')
      }

      if (parentElement) {
        console.log('IT WORKED')
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
}
go()


// Message Listers
chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, videoId, videoLink, name, url} = obj;
  console.log(type);
  globalURL = url
  if (type === "NEW_YOUTUBE") {
    console.log(videoLink);
    newVideLoaded();
  }
  if (type === "NEW_YOUTUBE_PROFILE") {
    newYoutubeProfileLoaded();
  }
  if (name === 'tweet') {
    console.log('recieving');
    wait(500);
    addBookmark();
  }
  //LinkedIn
  if (name === 'LinkedIn') {
    console.log('linkinggg')
    wait(500);
    linkedIn()
  }
  response({ message: "Connection Established" });
});
