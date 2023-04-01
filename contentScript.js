// const btn=document.getElementById("segmented-like-button")
const wait = (amount = 0) =>
  new Promise((resolve) => setTimeout(resolve, amount));

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

    

    bookmarkBtn.src = "https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png"; 

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

const newLinkedinProfileLoaded = () => {
  const LinkedBookmarkBtn = document.querySelector(".Linked-in-Bookmark-btn")
  if (!LinkedBookmarkBtn) {
    console.log("Linked Profile Loaded")
    // let parentDiv = document.querySelector(".pv-top-card-v2-ctas")
    let parentDiv =document.querySelector(".ph5").lastElementChild
    let parentDivForImg = document.createElement("div")

    if(parentDiv===null)parentDiv=document.querySelector(".ph5").lastChild.previousSibling
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
    console.log("profile URL" , profileURL)    
    })
    
  }
}
//Twitter Post
function addBookmark() {
  const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
  if (!bookmarkBtnExists) {
    console.log("makinn");
    const bookmarkBtn = document.createElement("img");
    bookmarkBtn.src = "https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png";
    bookmarkBtn.style.width = "50px";
    bookmarkBtn.style.cursor = "pointer";
    bookmarkBtn.title = "Click to bookmark this tweet";
    bookmarkBtn.className = "css-1dbjc4n r-18u37iz r-1h0z5md " + "bookmark-btn";
    bookmarkBtn.addEventListener("click", () => {
      const newBookmark = {
        username: `@${location.href.split(".com/")[1].split("/status")[0]}`,
        tweetLink: location.href,
        tweet: str,
      };
      console.log(newBookmark);
      chrome.storage.sync.set({ newBookmark });
    });

    const parentElement = document.getElementsByClassName(
      "css-1dbjc4n r-1oszu61 r-2sztyj r-1efd50x r-5kkj8d r-1ta3fxp r-18u37iz r-h3s6tt r-a2tzq0 r-3qxfft r-s1qlax"
    )[0];
    let str = "";
    const twitterBookmark = document.getElementsByClassName(
      "css-1dbjc4n r-1oszu61 r-2sztyj r-1efd50x r-5kkj8d r-1ta3fxp r-18u37iz r-h3s6tt r-a2tzq0 r-3qxfft r-s1qlax"
    )[0].children[3];
    console.log(twitterBookmark);
    parentElement.insertBefore(bookmarkBtn, twitterBookmark);
    str = document.getElementsByClassName(
      "css-901oao r-1nao33i r-37j5jr r-1inkyih r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0"
    )[0].innerText;
  }
}
async function go() {
  await waitForTimeline();
  console.log("checking if blue");
  await wait(500);
  addBookmark();
}
async function waitForTimeline() {
  return new Promise((resolve, reject) => {
    const interval = setInterval(function () {
      console.log("checking for timeline...");
      const parentElement = document.getElementsByClassName(
        "css-1dbjc4n r-1oszu61 r-2sztyj r-1efd50x r-5kkj8d r-1ta3fxp r-18u37iz r-h3s6tt r-a2tzq0 r-3qxfft r-s1qlax"
      )[0];

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
  const { type, videoId, videoLink, name } = obj;
  console.log(type);
  if (type === "NEW_YOUTUBE") {
    console.log(videoLink);
    newVideLoaded();
  }
  if (type === "NEW_YOUTUBE_PROFILE") {
    newYoutubeProfileLoaded();
  }
  if(type === "Profile"){
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
