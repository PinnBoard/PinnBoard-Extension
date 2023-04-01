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
          url: tab.url,
        },
        (res) => {
          console.log(res);
        }
      );
    }
    // For profile visit
    if(activeTab.url && activeTab.url.includes('youtube.com/@')){
      chrome.tabs.sendMessage(
        activeTab.id,
        {
          type: "NEW_YOUTUBE_PROFILE",
          videoId: "@"+activeTab.url.split("/")[0],
          videoLink: activeTab.url,
          url: tab.url,
        },
        (res) => {
          console.log(res);
        }
      )
    }
    if(tab.url && tab.url.includes('linkedin.com/in/')){
      console.log('sending to Profile: ', tab.url);
      chrome.tabs.sendMessage(tabId,{
        type: 'Profile',
        name: 'Profile',
        url: tab.url,
      })
    }
    else if(tab.url && tab.url.includes('linkedin.com/groups/')){
      console.log('sending to Profile: ', tab.url);
      chrome.tabs.sendMessage(tabId,{
        type: 'Profile',
        name: 'Profile',
        url: tab.url,
      })
    }
    else if(tab.url && tab.url.includes('linkedin.com/company')){
      console.log('sending to Profile: ', tab.url);
      chrome.tabs.sendMessage(tabId,{
        type: 'Profile',
        name: 'Profile',
        url: tab.url,
      })
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
          url: tab.url,
        },
        (res) => {
          console.log(res);
        }
      );
    }

    //Twitter Post 
     if(tab.url && tab.url.includes('/status/')){
      console.log('sending to tweet: ', tab.url)
      chrome.tabs.sendMessage(tabId, {
        type: "TWEET", 
        name: 'tweet',
        tweetLink: tab.url,
        url: tab.url
      })
    }

    //LinkedIn Feed

    if(tab.url && tab.url.includes('linkedin.com/feed/')){
      console.log('sending to LinkedIn: ', tab.url)
      chrome.tabs.sendMessage(tabId,{
        type: 'Job_Post',
        name: 'LinkedIn',
        url: tab.url
      })
    }
  }
  //For profile
  
  
  );

  // 2. Twitter Functions
  
  // 3. LinkedIn functions

});
