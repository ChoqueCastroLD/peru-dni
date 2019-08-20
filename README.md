# peru-dni

![npm](https://img.shields.io/npm/v/peru-dni)
![npm bundle size](https://img.shields.io/bundlephobia/min/peru-dni)

Node module to fetch real name from peruvian's dni

How to Install:

  Using npm:
    
    > $ npm install peru-dni --save
    

How to use:

  (Nodejs example)
 
```javascript
  const perudni = require('peru-dni');

  // using Callbacks
  perudni.getNameFromDNI('71747104', (data, err) => {
      if (err) {
          console.log("Something went way wrong " + err.message)
      } else {
          console.log("Last name is " + data.lastname + " Full name is " + data.fullname);
      }
  });

  // using Promises
  perudni.getNameFromDNI('71747104')
      .then(data => {
          console.log("Real name is " + data.fullname);
      })
      .catch(err => {
          console.log("Something went wrong ", err.message);
      });
```
