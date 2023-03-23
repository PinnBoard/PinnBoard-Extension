// const btn=document.getElementById("segmented-like-button")

const newVideLoaded = () => {
  const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
  console.log(bookmarkBtnExists);
  if (!bookmarkBtnExists) {
    const bookmarkBtn = document.createElement("img");

    bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
    bookmarkBtn.className = "ytp-button " + "bookmark-btn";
    bookmarkBtn.title = "Click to bookmark current timestamp";

    let youtubeBtnControls =
    document.querySelector("#owner.item.style-scope.ytd-watch-metadata");
    console.log(youtubeBtnControls)
    
    bookmarkBtn.style.width="30px"
    bookmarkBtn.style.paddingLeft="20px"

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
    newVideLoaded()
  }
  response({message:"Connection Established"})
});
