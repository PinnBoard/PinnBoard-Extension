chrome.tabs.onUpdated.addListener((tabId, _, tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let activeTab = tabs[0];
    console.log(activeTab);
    // 1. Youtube funtions
    if (activeTab.url && activeTab.url.includes("youtube.com/watch")) {
      const queryParameters = activeTab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
      console.log(activeTab.url);
      chrome.tabs.sendMessage(
        activeTab.id,
        {
          type: "NEW_YOUTUBE",
          videoId: urlParameters.get("v"),
          videoLink: activeTab.url,
        },
        (res) => {
          console.log(res);
        }
      );
    }
    // For profile visit
    else{
      chrome.tabs.sendMessage(
        activeTab.id,
        {
          type: "NEW_YOUTUBE_PROFILE",
          videoId: "@"+activeTab.url.split("/")[0],
          videoLink: activeTab.url,
        },
        (res) => {
          console.log(res);
        }
      );
    }
    if (activeTab.url && (/(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/).test(activeTab.url)) {
      const queryParameters = activeTab.url;
      const urlParameters = new URLSearchParams(queryParameters);
      console.log(activeTab.url);
      console.log("Tweet")
      chrome.tabs.sendMessage(
        activeTab.id,
        {
          type: "NEW_TWITTER_PROFILE",
          videoId: urlParameters.get("v"),
          videoLink: activeTab.url,
        },
        (res) => {
          console.log(res);
        }
      );
    }
  }
  //For profile
  
  
  );

  // 2. Twitter Functions
  
  // 3. LinkedIn functions

});
