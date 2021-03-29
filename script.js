const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";

document.querySelector('body').appendChild(h2);

const personalInfo = {
    firstName: 'Johnnie',
    lastName: 'Williams',
    company: {
        name: 'Global Linking Solutions',
        jobTitle: 'Technical Escalations Manager'
    },
    hobbies: {
     'programming':'gaming','spending time with my family':
    }
}

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