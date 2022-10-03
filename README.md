# MyWishList ✨

This is a simple full stack app developed using Ionic + Angular + Express + Sequelize + MySQL to manage a small Wishlist. It consists of a simple CRUD that allows us to manage the items in our wishlist.
The backend is developed with Node.js and Express, using MySQL for the database, while the frontend is developed with Ionic and Angular.


## Getting Started 🚀

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

In order for the app to work we need to install Node and MySQL.
- [Node.js](https://nodejs.org/es/download/)
- [MySQL](https://www.mysql.com/downloads/)

### Installing

 1) First of all, clone the repository

 2) Install the dependencies in both backend and frontend folders with the command

    npm install
    
 3) Create the database with the name **db_wishlist**
 
 4) Change the database configuration in the db.config.js file (inside the config package in the backend project), changing the username and password.

## Postman and tests
You may test the server with the following endpoints in postman: https://documenter.getpostman.com/view/23626796/2s83mjDfg4

## Deployment

* For the frontend, deploy the project using the script command **ionic serve**
* For the backend, deploy the project using the command **node index.js**

## User guide
* In the landing page, press "My wishes..." to access the WishList management screen!

![imagen](https://user-images.githubusercontent.com/84546617/193635163-fed63891-ac3a-4426-aad0-1c33793fc84f.png)


* In the My Wishes screen, you can see a list of all your wishes, as well as a button to create a new wish and one to return to the homepage. In each row, there's also a button to edit and to delete each wish.

![imagen](https://user-images.githubusercontent.com/84546617/193635236-a3f53682-39f2-4b1d-89a1-256bc926c8bf.png)

* If you press on the **Make a wish** button, you access the screen to create a new wish!

![imagen](https://user-images.githubusercontent.com/84546617/193635301-bb086deb-3290-4855-b3eb-e811a17cc6a7.png)

* If you press the edit button on the My Wishes screen, a similar screen opens with the data of the selected wish. There you may update the information.

![imagen](https://user-images.githubusercontent.com/84546617/193635356-af01b8f7-0330-4dc6-ac42-d2f3390ce00e.png)


* If you press the rubbish can icon, you may delete a wish from the list.


Enjoy the app!! 💟


## Authors

  - **Laura Torres Daudén**
