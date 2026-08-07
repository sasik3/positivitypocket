const messages = ['I am doing amazing!', 
    'I am doing my best, and that is all that matters!',
'I am loved',
'I am doing so many amazing things',
'I am working hard, and I will succeed',
'I am doing my best and will continue to do so',
'I am worthy of so many amazing things',
'I will overcome any challenge that I face',
'There are so many amazing things yet to come',
'There are so many things to enjoy in life',
'There are so many amazing things to look forward to',]
const message = messages[Math.floor(Math.random() * messages.length)]
console.log(message)
document.getElementById("display").innerHTML = message;
document.getElementById("link").addEventListener('click', (event) => {event.preventDefault(); chrome.tabs.create({url:event.target.href});});