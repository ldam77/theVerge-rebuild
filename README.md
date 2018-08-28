# TheVergeRebuild

#### A rebuild of The Verge website using Angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

#### By _Lan Dam, 08/17/2018_

## Description

TheVergeRebuild is a remake of The Verge website using Angular.  The Verge is a site about technology news and new hardware reviews.
The Verge original website can be found at www.theverge.com

## Setup

* Download or clone the repository.
* Create a project in firebase.
* From your project console, click on database and select real-time database.
* Go to authentication and click on web set up, copy the web set up data.
* Create a file call api-keys.ts in your /src/app/ folder.
* Copy the following into the ap-keys.ts file, replacing XXX with your firebase data:
export const masterFirebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx.firebaseapp.com",
  databaseURL: "https://xxxx.firebaseio.com",
  storageBucket: "xxxx.appspot.com",
  messagingSenderId: "xxxx"
};
* Select database in the left hand menu, next to your database URL, click on the triple dots and select import data from json.
* Select dample-articles.json from the root directory.
* To run dev server, type ng serve in the console
* To build, type ng build in console.

## Support

For any other questions or support details, please email: ldam77@yahoo.com

## Technology Used

Application: Angular, TypeScript, Firebase

### Legal

Copyright (c) 2018 **Lan Dam**

This software is licensed under the MIT license.
All images and story snippet in sample database property of TheVerge.
