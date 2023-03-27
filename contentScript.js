// const btn=document.getElementById("segmented-like-button")

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



// Message Listers
chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, videoId, videoLink } = obj;
  console.log(type);
  if (type === "NEW_YOUTUBE") {
    console.log(videoLink);
    newVideLoaded();
  }
  if (type === "NEW_YOUTUBE_PROFILE") {
    newYoutubeProfileLoaded();
  }
  if (type === "NEW_TWITTER_PROFILE") {
    console.log("Something");
    newPostLoaded();
  }
  response({ message: "Connection Established" });
  
});





// Twitter

const newPostLoaded = () => {
  const bookmarkBtnExists = document.querySelector(".twitter-bookmark");
  if (!bookmarkBtnExists) {
    const bookmarkBtn = document.createElement("img");
    bookmarkBtn.src = 'https://i.postimg.cc/nzXYHLFF/bookmark-PINN.png' ;
    bookmarkBtn.style.width = '45px'
    bookmarkBtn.style.height = '45px'
    bookmarkBtn.style.padding="0.5rem 0.5rem 0.5rem 0.5rem"
    bookmarkBtn.style.cursor="pointer"
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

        let profileName1 = document.querySelector(".css-901oao.css-1hf3ou5.r-18u37iz.r-37j5jr.r-1wvb978.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0" );// selecting the classname in which  profile username is written

// console.log(profileName1.firstChild.firstChild.innerHTML)
let profileUserName = profileName1.firstChild.innerHTML

   console.log(profileUserName)

    //   var profileImg = document.querySelector(".css-4rbku5.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-1loqt21.r-1pi2tsx.r-1ny4l3l.r-o7ynqc.r-6416eg.r-13qz1uu").getAttribute('href')
    // console.log("The Profile Image is "+"https://twitter.com"+profileImg)
    let divs = document.querySelectorAll('.css-1dbjc4n.r-kemksi.r-sdzlij.r-1wyvozj.r-1udh08x.r-633pao.r-u8s1d.r-1v2oles.r-desppf');
console.log(divs)
    let fourthDiv = divs[3];
console.log(fourthDiv)
    let img = fourthDiv.querySelector('img');
let src = img.getAttribute('src');
console.log("The Profile Image is"+  " "+ src)

let profileName = document.querySelector(".css-901oao.r-1awozwy.r-1nao33i.r-6koalj.r-37j5jr.r-adyw6z.r-1vr29t4.r-135wba7.r-bcqeeo.r-1udh08x.r-qvutc0").firstChild.firstChild.innerHTML
console.log("Profile Name " + " " + profileName)

let obj = {
  "profileName" : profileName,
  "profileUserName":profileUserName,
  "profileURL":profileURL,
  "profileImage": src
}
console.log(obj)

//  >>>>>> If want to store it in LOCAL STORAGE "THE CODE WORKS !!!"
// let obj1 = JSON. stringify(obj)
// localStorage.setItem("UserDetails",obj1)
// const x = localStorage.getItem("UserDetails")
// console.log(x)
  });
  }
};
