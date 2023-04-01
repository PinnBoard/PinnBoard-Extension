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
  if(type === "Profile"){
    newLinkedinProfileLoaded()
  }
  response({ message: "Connection Established" });
});
