
// const btn=document.getElementById("segmented-like-button")
// Message Listers
(()=>{
  
  const newVideLoaded = (v) =>{
    const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
    console.log(bookmarkBtnExists)
    if (!bookmarkBtnExists) {
      const bookmarkBtn = document.createElement("img");

      bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
      bookmarkBtn.className = "ytp-button " + "bookmark-btn";
      bookmarkBtn.title = "Click to bookmark current timestamp";

      let youtubeBtnControls = document.getElementsByClassName("ytp-left-controls")[0];
    
      youtubeBtnControls.appendChild(bookmarkBtn);
      bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
    }
    // bookmarkBtn.addEventListener("click",()=> addEventListener(videoLink));
  }
  
  
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type,videoId, videoLink } = obj;
    console.log(type)
    if (type === "NEW_YOUTUBE") {
      newVideLoaded()
    }
  });

  newVideLoaded()

})


