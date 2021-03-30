const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";

document.querySelector('body').appendChild(h2);
const clickerButton = document.getElementById("clicker")


function deepIterator(target) {
    if (Array.isArray(target)) {
      for (const element of target) {
        deepIterator(element);
      }
    } else if (typeof target === 'object') {
      for (const key in target) {
        deepIterator(target[key]);
      }
    } else {
      console.log(target);
    }
}