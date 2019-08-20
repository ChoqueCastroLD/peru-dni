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
  const perudni = require('perudni');
  
  // using Callbacks
  perudni.getName('71747115', (data, err) => {
    if(err){
      console.log("Something went way wrong " + err.message)
    } else {
      console.log("Last name is " + data.lastname + " Full name is " + data.fullname);
    }
  });  
  
  // using Promises
  perudni.getName('71747115')
  .then( data => {
    console.log("Real name is " + data.fullname);  
  })
  .catch( err => {
    console.log("Something went wrong ", err.message);
  });
```
