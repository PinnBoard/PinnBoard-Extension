chrome.tabs.onUpdated.addListener((tabId, _, tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let activeTab = tabs[0];
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
  });

  // 2. LinkedIn functions

  // 3. Twitter Functions
});
