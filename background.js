const GOOGLE_MAPS_SEARCH_URL = 'https://www.google.com/maps/search/?api=1&query=';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'search-google-maps',
    title: 'Search in Google Maps',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== 'search-google-maps') return;

  const text = (info.selectionText || '').trim();
  if (!text) return;

  const url = GOOGLE_MAPS_SEARCH_URL + encodeURIComponent(text);
  chrome.tabs.create({ url });
});
