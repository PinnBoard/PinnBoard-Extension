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

    bookmarkBtn.src = "https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png";
    bookmarkBtn.className = "ytp-button " + "bookmark-btn";
    bookmarkBtn.title = "Click to bookmark current timestamp";

    // let youtubeBtnControls =
    // document.querySelector("#buttons.style-scope.ytd-c4-tabbed-header-renderer");
    console.log(youtubeBtnControls);

    bookmarkBtn.style.width = "30px";
    bookmarkBtn.style.paddingLeft = "20px";

    youtubeBtnControls.appendChild(bookmarkBtn);
    bookmarkBtn.addEventListener('click', ()=>{
      const channelName = document.querySelector('.style-scope.ytd-c4-tabbed-header-renderer').innerText.split('\n')[0]
      const channelDescription = document.querySelector('.style-scope.ytd-c4-tabbed-header-renderer').innerText.split('\n')[2]
      const channelLogo = document.querySelector('.style-scope.ytd-c4-tabbed-header-renderer.no-transition').firstElementChild.src

      const channelDetails = {
        channelName: channelName,
        channelDescription: channelDescription,
        channelLogo: channelLogo,
        channelUrl: globalURL
      }
      console.log(channelDetails)
    })
    
  }
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



    bookmarkBtn.src = "https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png";

    bookmarkBtn.className = "ytp-button " + "bookmark-btn";
    bookmarkBtn.title = "Click to bookmark current timestamp";

    console.log(youtubeBtnControls);

    bookmarkBtn.style.width = "30px";
    bookmarkBtn.style.paddingLeft = "20px";

    youtubeBtnControls.appendChild(bookmarkBtn);
    bookmarkBtn.addEventListener("click", () => {
      const videoTitle = document.querySelectorAll('.style-scope.ytd-watch-metadata')[0].firstElementChild.innerText
      const channelLogo = document.querySelectorAll('.style-scope.ytd-watch-metadata')[0].children[1].firstElementChild.firstElementChild.firstElementChild.firstChild.firstElementChild.src
      const channelName = document.querySelectorAll('.style-scope.ytd-watch-metadata')[0].children[1].firstElementChild.firstElementChild.children[1].firstElementChild.innerText
      const videoLink = globalURL

      const videoDetails = {
        videoTitle: videoTitle,
        videoLink: videoLink,
        channelName: channelName,
        channelLogo: channelLogo
      }
      console.log(videoDetails)
    });
  }
  // bookmarkBtn.addEventListener("click",()=> addEventListener(videoLink));
};

const newLinkedinProfileLoaded = () => {
  const LinkedBookmarkBtn = document.querySelector(".Linked-in-Bookmark-btn")
  if (!LinkedBookmarkBtn) {
    console.log("Linked Profile Loaded")
    // let parentDiv = document.querySelector(".pv-top-card-v2-ctas")
    let parentDiv = document.querySelector(".ph5").lastElementChild
    let parentDivForImg = document.createElement("div")

    if (parentDiv === null) parentDiv = document.querySelector(".ph5").lastChild.previousSibling
    parentDiv.style.justifyContent = 'space-between'
    let bookmarkImg = document.createElement("img")
    bookmarkImg.src = "https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png"
    bookmarkImg.style.width = '65px'
    // bookmarkImg.style.height = '72px'
    bookmarkImg.style.marginTop = "-28px"
    bookmarkImg.title = 'Bookmark this profile'
    bookmarkImg.style.padding = "0.5rem 0.5rem 0.5rem 0.5rem"
    bookmarkImg.style.cursor = "pointer"
    bookmarkImg.className = "Linked-in-Bookmark-btn"

    parentDivForImg.appendChild(bookmarkImg)

    parentDiv.appendChild(parentDivForImg)

    bookmarkImg.addEventListener('click', () => {
      const profileImageUrl = document.querySelectorAll('.pv-top-card-profile-picture__image.pv-top-card-profile-picture__image--show.ember-view')[0].src;
      console.log(profileImageUrl)
      let profileName = document.querySelector(".text-heading-xlarge.inline.t-24.v-align-middle.break-words")
      console.log(profileName.innerText)
      let profileURL = window.location.href;
      console.log("profile URL", profileURL)
    })

  }
}
//Twitter Post
function addBookmark() {
  const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
  if (!bookmarkBtnExists) {
    console.log("makinn");
    const bookmarkBtn = document.createElement("img");
    wait(1000)
    const parentElement = document.querySelectorAll('.css-1dbjc4n.r-1oszu61.r-2sztyj.r-1efd50x.r-5kkj8d.r-1ta3fxp.r-18u37iz.r-h3s6tt.r-a2tzq0.r-3qxfft.r-s1qlax')[0];
    console.log(parentElement)
    parentElement.insertBefore(bookmarkBtn, parentElement.children[3])
    let str = ''
    str = document.querySelectorAll('.css-901oao.r-1nao33i.r-37j5jr.r-1inkyih.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0')[0].innerText
    bookmarkBtn.src = "https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png";
    bookmarkBtn.style.width = '50px'
    bookmarkBtn.style.cursor = 'pointer'
    bookmarkBtn.title = "Click to bookmark this tweet";
    bookmarkBtn.className = 'css-1dbjc4n r-18u37iz r-1h0z5md ' + 'bookmark-btn';

    console.log('inserted')
    bookmarkBtn.addEventListener("click", () => {
      const newBookmark = {
        username: `@${location.href.split(".com/")[1].split("/status")[0]}`,
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
        console.log("IT WORKED");
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
}
go();

// Message Listers
chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, videoId, videoLink, name, url } = obj;
  console.log(type);
  globalURL = url
  if (type === "NEW_YOUTUBE") {
    console.log(videoLink);
    newVideLoaded();
  }
  if (type === "NEW_YOUTUBE_PROFILE") {
    newYoutubeProfileLoaded();
  }
  if (type === "Profile") {
    newLinkedinProfileLoaded()
  }
  if (type === "NEW_TWITTER_PROFILE") {
    console.log("Something");
    newTwitterProfileLoaded();
  }
  if (type === "TWEET") {
    console.log("recieving");
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

// Twitter

const newTwitterProfileLoaded = () => {
  const bookmarkBtnExists = document.querySelector(".twitter-bookmark");
  if (!bookmarkBtnExists) {
    const bookmarkBtn = document.createElement("img");
    bookmarkBtn.src = "https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png";
    bookmarkBtn.style.width = "45px";
    bookmarkBtn.style.height = "45px";
    bookmarkBtn.style.padding = "0.5rem 0.5rem 0.5rem 0.5rem";
    bookmarkBtn.style.cursor = "pointer";
    bookmarkBtn.style.color = "#fff";
    bookmarkBtn.className = "twitter-bookmark";

    let twitterbtn = document.querySelector(
      ".css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs"
    );
    console.log(twitterbtn);
    twitterbtn.appendChild(bookmarkBtn);
    bookmarkBtn.addEventListener("click", function () {
      let profileURL = location.href; // viewing the current tab url
      console.log("Profile URL is ", profileURL.toString()); // logging the current tab url in console

      let profileName1 = document.querySelector(
        ".css-901oao.css-1hf3ou5.r-18u37iz.r-37j5jr.r-1wvb978.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0"
      ); // selecting the classname in which  profile username is written

      // console.log(profileName1.firstChild.firstChild.innerHTML)
      let profileUserName = profileName1.firstChild.innerHTML;

      console.log(profileUserName);

      //   var profileImg = document.querySelector(".css-4rbku5.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-1loqt21.r-1pi2tsx.r-1ny4l3l.r-o7ynqc.r-6416eg.r-13qz1uu").getAttribute('href')
      // console.log("The Profile Image is "+"https://twitter.com"+profileImg)
      let divs = document.querySelectorAll(
        ".css-1dbjc4n.r-kemksi.r-sdzlij.r-1wyvozj.r-1udh08x.r-633pao.r-u8s1d.r-1v2oles.r-desppf"
      );
      console.log(divs);
      let fourthDiv = divs[3];
      console.log(fourthDiv);
      let img = fourthDiv.querySelector("img");
      let src = img.getAttribute("src");
      console.log("The Profile Image is" + " " + src);

      let profileName = document.querySelector(
        ".css-901oao.r-1awozwy.r-1nao33i.r-6koalj.r-37j5jr.r-adyw6z.r-1vr29t4.r-135wba7.r-bcqeeo.r-1udh08x.r-qvutc0"
      ).firstChild.firstChild.innerHTML;
      console.log("Profile Name " + " " + profileName);

      let obj = {
        profileName: profileName,
        profileUserName: profileUserName,
        profileURL: profileURL,
        profileImage: src,
      };
      console.log(obj);

      //  >>>>>> If want to store it in LOCAL STORAGE "THE CODE WORKS !!!"
      // let obj1 = JSON. stringify(obj)
      // localStorage.setItem("UserDetails",obj1)
      // const x = localStorage.getItem("UserDetails")
      // console.log(x)
    });
  }
};
