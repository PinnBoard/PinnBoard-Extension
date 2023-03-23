chrome.tabs.onUpdated.addListener((tabId,_,tab) => {
  console.log(tab);

  // 1. Youtube funtions
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(tab.url)
    chrome.tabs.sendMessage(tabId, {
      type: "NEW_YOUTUBE",
      videoId: urlParameters.get("v"),
      videoLink: tab.url
    });
  }

  // 2. LinkedIn functions

  // 3. Twitter Functions
  
});



