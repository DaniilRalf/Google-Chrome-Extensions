let color = '#3aa757';

// eslint-disable-next-line no-undef
chrome.runtime.onInstalled.addListener(() => {

  // eslint-disable-next-line no-undef
  chrome.storage.sync.get(null, function callback(items) { console.log(items) });

  // eslint-disable-next-line no-undef
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);


    // // eslint-disable-next-line no-undef
    // chrome.storage.sync.set({'test-key': 'test-value'}, function() {
    //     console.log('Value is set ');
    // });
    //
    // setInterval(() => {
    //     console.log('test');
    // }, 2000)
});






