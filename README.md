# peru-dni

![npm](https://img.shields.io/npm/v/peru-dni) ![npm bundle size](https://img.shields.io/bundlephobia/min/peru-dni)

Node module to fetch real name from peruvian's dni

How to Install:

  Using npm:
    
    > $ npm install peru-dni --save
    

How to use:

  (Nodejs example)
 
```javascript
  const perudni = require('perudni');
  
  // do it sync
  let someonesrealname = perudni.getName('71747115');
  
  console.log("realname is " + someonesrealname);
  
  
  // or async (Promises)
  perudni.getName('71747115')
  .then( realname => {
    console.log("Real name is " + realname);  
  })
  .catch( err => {
    console.log("Something went wrong ", err);
  });
```
