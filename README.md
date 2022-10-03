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
![imagen](https://user-images.githubusercontent.com/84546617/193632493-7d75681b-adbd-44b5-b761-52e1090b2adf.png)

* In the My Wishes screen, you can see a list of all your wishes, as well as a button to create a new wish and one to return to the homepage. In each row, there's also a button to edit and to delete each wish.
![imagen](https://user-images.githubusercontent.com/84546617/193634057-6afaa18b-3c03-4e8f-8427-365b60bd465d.png)

* If you press on the **Make a wish** button, you access the screen to create a new wish!

![imagen](https://user-images.githubusercontent.com/84546617/193634272-31ab5d0b-2de4-4b81-8965-c31fb1b04036.png)

* If you press the edit button on the My Wishes screen, a similar screen opens with the data of the selected wish. There you may update the information.
* 
* If you press the rubbish can icon, you may delete a wish from the list.


Enjoy the app!! 💟


## Authors

  - **Laura Torres Daudén**
