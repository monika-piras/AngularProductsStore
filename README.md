# AngularProductsStore 
An example about how to build a responsive and mobile friendly 
website with [AngularJS], retrieving the data from the product.service.ts 
file. 

Online demo here: https://monika-piras.github.io/AngularProductsStore/




The navigation of the pages is managed with specific routes 
and passage of parameters in query strings and the go-back button
navigates back in the platform's history.


The profile form actions are handled with Observable usage in order to manage possible async scenarios.
A Notification Service is available, and it allows to show success and error feedback messages.



The user can:

- view the detail of the product
- add the product to the cart list
- remove the product from the cart list
- compile the form for his personal account
  with pattern controls
- search for the products by **categories: home / office / garden**

The variables to be used during the deploy are also defined:

    enviroment.ts :  imagePath: '/assets/img/'
    enviroment.prod.ts :  imagePath: '/AngularProductsStore/assets/img/'



## Install
```
npm install
```

### Run locally
```
ng serve
```

## Deploy
```
ng build --prod --output-path docs 
```

--prod :  in order to use proper env variables
--output-path :  it specifies the output folder

Remember to use the right base href path in the index.html of the docs folder.
In the online demo we have:

base-href="/AngularProductsStore/"



## License


MIT

## Version

0.1.0



[AngularJS]: <https://angular.io/>
