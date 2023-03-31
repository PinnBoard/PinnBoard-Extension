// const btn=document.getElementById("segmented-like-button")
const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

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

//Twitter Post
function addBookmark() {
  const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
  if (!bookmarkBtnExists) {
    console.log('makinn')
    const bookmarkBtn = document.createElement("img");
    bookmarkBtn.src = chrome.runtime.getURL('images/bookmarkPINN.png')
    bookmarkBtn.style.width = '50px'
    bookmarkBtn.style.cursor = 'pointer'
    bookmarkBtn.title = "Click to bookmark this tweet";
    bookmarkBtn.className = 'css-1dbjc4n r-18u37iz r-1h0z5md ' + 'bookmark-btn';
    bookmarkBtn.addEventListener('click', () => {
      const newBookmark = {
        username: `@${location.href.split('.com/')[1].split('/status')[0]}`,
        tweetLink: location.href,
        tweet: str
      }
      console.log(newBookmark)
      chrome.storage.sync.set({ newBookmark })
    })

    const parentElement = document.getElementsByClassName('css-1dbjc4n r-1oszu61 r-2sztyj r-1efd50x r-5kkj8d r-1ta3fxp r-18u37iz r-h3s6tt r-a2tzq0 r-3qxfft r-s1qlax')[0];
    let str = ''
    const twitterBookmark = document.getElementsByClassName('css-1dbjc4n r-1oszu61 r-2sztyj r-1efd50x r-5kkj8d r-1ta3fxp r-18u37iz r-h3s6tt r-a2tzq0 r-3qxfft r-s1qlax')[0].children[3]
    console.log(twitterBookmark)
    parentElement.insertBefore(bookmarkBtn, twitterBookmark)
    str = document.getElementsByClassName('css-901oao r-1nao33i r-37j5jr r-1inkyih r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0')[0].innerText




  }
}
async function go() {
  await waitForTimeline();
  console.log('checking if blue')
  await wait(500);
  addBookmark()
}
async function waitForTimeline() {
  return new Promise((resolve, reject) => {
    const interval = setInterval(function () {
      console.log('checking for timeline...');
      const parentElement = document.getElementsByClassName('css-1dbjc4n r-1oszu61 r-2sztyj r-1efd50x r-5kkj8d r-1ta3fxp r-18u37iz r-h3s6tt r-a2tzq0 r-3qxfft r-s1qlax')[0];

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
  const { type, videoId, videoLink ,name } = obj;
  console.log(type);
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
  response({ message: "Connection Established" });
});
