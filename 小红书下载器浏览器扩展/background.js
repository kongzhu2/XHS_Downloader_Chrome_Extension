//This is services worker.
/*
Extensions can monitor browser events in the background using the extension's service worker. Service workers are special JavaScript environments that are loaded to handle events and terminated when they're no longer needed.
*/

/*
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});
*/
/*
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith("https://www.xiaohongshu.com/explore/")) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
  

    if (nextState === "ON") {
      // Insert the JS file when the user turns the extension on

      await chrome.scripting.executeScript({files: ['scripts/content.js'],
      target:{tabId: tab.id}});


    } else if (nextState === "OFF") {
      // Refresh the tab when the user turns the extension off
      chrome.tabs.reload(tab.id);
      }
  
  }});

 */
