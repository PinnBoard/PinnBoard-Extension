// global url
let  globalURL;

const globalURLSetter = () =>{
  globalURL=window.location.href.split(".com")[0]+".com/";
  console.log(globalURL)
}
globalURLSetter();



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


// Input Event Fire
// 1.Twitter
const twittInputHandler = (ele,textToBeReplaced) =>{;
  const wrapper = ele.querySelector('[data-text="true"]')?.parentNode;
  wrapper.innerHTML = `<span data-text="true">${textToBeReplaced}</span>`
  wrapper.dispatchEvent(new Event("input",{'bubbles':true,cancelable:"true"}));
}

// 2.LinkedIn
const linkedinInputHandler = (ele,textToBeReplaced) => {
  const wrapper = ele;
  wrapper.innerHTML = `<p>${textToBeReplaced}</p>`
  wrapper.dispatchEvent(new Event("input",{'bubbles':true,cancelable:"true"}))
}


// 3. Youtube
const youtubeHandler = (ele,textToBeReplaced) => {
  ele.value=textToBeReplaced;
}


// Genral function 

const urlToFunctionMapper = {
  "https://www.linkedin.com/" : linkedinInputHandler,
  "https://twitter.com/" : twittInputHandler,
  "https://www.youtube.com/" : youtubeHandler,
}


window.onkeyup=(e)=>{
  // Genral way to grab the text from a element
  let command  = e.target.value || e.target.innerText;
  //Command check
  if(command === "/share"){
    // api call to our API to get the result accoding to the command
    const funct=urlToFunctionMapper[globalURL];
    funct(e.target,"Share twitt");
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
  response({ message: "Connection Established" });
});
