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


const innerChildFinder = (ele) =>{
  let textParent=null;
  let elee=ele;
  
  while((elee.firstChild)!==null){
    textParent=elee;
    elee=elee.firstChild;
  }
  return textParent
}

// Input Event Fire
// 1.Twitter
const twittInputHandler = (ele,textToBeReplaced) =>{
  let textParent=innerChildFinder(ele);
  const wrapper = textParent?.parentNode;
  textParent.innerText = textToBeReplaced
  console.log(textParent)
  wrapper.innerHTML = textParent.innerHTML
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
  console.log(ele)
  if(ele.tagName === "INPUT" )ele.value=textToBeReplaced;
  else{
    const textParent = innerChildFinder(ele);
    textParent.innerText = textToBeReplaced;
  }
}


// 4. GitHub
const gitHubHandler  = (ele,textToBeReplaced) => {
  ele.value=textToBeReplaced
}




// Genral function 

// const commandReplacer = (ele,textToBeReplaced) =>{
//   let textParent=innerChildFinder(ele);
//   const wrapper = textParent?.parentNode;
//   textParent.innerText = textToBeReplaced
//   const div = document.createElement("div");
//   div.appendChild(textParent);
//   console.log(div.innerHTML)
//   wrapper.innerHTML = div.innerHTML;
//   console.log(wrapper);
//   wrapper.dispatchEvent(new Event("input",{'bubbles':true,cancelable:true}));
// }

const urlToFunctionMapper = {
  "https://www.linkedin.com/" : linkedinInputHandler,
  "https://twitter.com/" : twittInputHandler,
  "https://www.youtube.com/" : youtubeHandler,
  "https://github.com/":gitHubHandler,
}


window.onkeyup=(e)=>{
  // Genral way to grab the text from a element
  console.log(e.target.innerText);
  let command  = e.target.value || e.target.innerText;
  //Command check
  console.log(command)
  if(command.includes("/share")){
    console.log("hello")
    // api call to our API to get the result accoding to the command
    const funct=urlToFunctionMapper[globalURL];
    // commandReplacer(e.target,"Share twitt");
    funct(e.target,"Example")
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
