# MyWishList ✨

This is a simple full stack app developed using Ionic + Angular + Express + Sequelize + MySQL to manage a small Wishlist. 
As well, the app allows you to use the camera from your phone to take pictures and save them in the database. The app also includes a simple authentication feature using tokens.
The backend is developed with Node.js and Express, using MySQL for the database, while the frontend is developed with Ionic and Angular.


## Getting Started 🚀

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

In order for the app to work we need to install Node and MySQL.
- [Node.js](https://nodejs.org/es/download/)
- [MySQL](https://www.mysql.com/downloads/)
- [Git](https://git-scm.com/downloads)

### Installing

 1) First of all, clone the repository

 2) Install the dependencies in both backend and frontend folders with the command

    npm install
    
 3) Create the database with the name **db_wishlist**
 
 4) Change the database configuration in the db.config.js file (inside the config package in the backend project), changing the username and password.

## Postman and tests
You may test the server with the following endpoints in postman: https://documenter.getpostman.com/view/23626796/2s8YY9x7jZ

## Deployment

* For the frontend, deploy the project using the script command **ionic serve**
* For the backend, deploy the project using the command **node index.js**

## User guide
* First of all, welcome to the landing page!

![Sin título-1](https://user-images.githubusercontent.com/84546617/199816702-cc21c9ce-af6b-46fc-9ba8-f882a757133d.jpg)

* Press the menu icon to display the menu. You may also drag it from the left side of the screen:

![imagen](https://user-images.githubusercontent.com/84546617/199817714-c3c365f3-853a-4866-8992-a889ac9f0d3b.png)

* If you try to enter to the Profile, Make a wish or My wishes pages without logging in, the Log in page will appear:

![imagen](https://user-images.githubusercontent.com/84546617/199817447-7f320aa3-2b72-4205-b622-cce85b39b494.png)

* If you don't have an account, click on Register and fill in the Register form:

![imagen](https://user-images.githubusercontent.com/84546617/199818712-88596085-d3cc-4b35-9779-c07ce8c31378.png)

* Once logged in you may go to the Profile, My Wishes and Make a Wish pages.

* The My Wishes page consists of a list of all your wishes!

![imagen](https://user-images.githubusercontent.com/84546617/199819114-30c9b986-a489-484c-acf2-ac1c6b5b4d07.png)

* Press the arrow button of any of the elements and the accordion will open, revealing the Wish:

![imagen](https://user-images.githubusercontent.com/84546617/199819359-fa929447-4202-4cb7-8cf5-ae969d11a1fe.png)

* By sliding the Wish from right to left, you'll reveal the Edit and delete buttons:

![imagen](https://user-images.githubusercontent.com/84546617/199819590-2b30a8fb-0470-4d56-a673-30d5c6430fed.png)

* If you press on the **+** button, you'll open the Make a wish screen, where you may create a new wish:

![imagen](https://user-images.githubusercontent.com/84546617/199819797-4cad027f-36a8-4468-bde6-e4ce38d77422.png)

* You must fill the name of the wish and the description and may upload a photo too!

* If you press the **Take a photo** button, your phone camera will open and you may take a picture:

![Captura de pantalla 2022-11-01 202315](https://user-images.githubusercontent.com/84546617/199820299-2d09949b-657c-476d-bd4d-da22af9917c0.jpg)
![Captura de pantalla 2022-11-01 202503](https://user-images.githubusercontent.com/84546617/199820366-9ab33e74-79fe-4cce-ae90-c14f1e3b20c3.jpg)

* If you press **Pick an image** you can chose a picture from your gallery. And if you finally decide you don't like the photo, you may discard it.

* When you're finished, press **New wish** to create the wish!


Enjoy the app!! 💟


## Authors

  - **Laura Torres Daudén**
