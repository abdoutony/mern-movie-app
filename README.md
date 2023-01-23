# mern-movie-app

This is a simple movie app made to show students how to build full stack application using mern stack

## The application front end

The application fron end consist of four interfaces
the first one we access it through http://localhost:port this is the home page
the second one we access it through http://localhost:port/movies this is where the user can see movies list
the third one we access it through http://localhost:port/movies/movie_id this is where the user can see the details of a movie
the fourth one we access it through http://localhost:port/login this is the login page
the fifth one we access it through http://localhost:port/admin this is the admin page it is private page needs login
the sixth one we access it through http://localhost:port/wrongpath this is the 404 page

## The application Backend api

The application backend consist this endpoints
the base url is http://localhost:5000/api
the endpoints

Method POST: /api/auth/register to register new user in postman you can use this info:
{
"email": "abdouaallb@gmail.com",
"password": "123456789",
"firstName": "Abdelkader",
"lastName": "Lounis"
}

Method POST: /api/auth/login: to login to our application in postman after seeding the db you can use this credentials
{
"email": "abdouaallb@gmail.com",
"password": "123456789",
}

Method GET: /api/auth/verifytoken to verify if user is logged in or not

Method GET: /api/movies to get the list of all the movies

Method POST: /api/movies to add new movie in post man after login you can use this
{
"title": "Black Panther wakanda forever",
"description": "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
"category": "action",
"rating": "7.2",
"poster": "https://fr.web.img2.acsta.net/pictures/22/10/17/10/28/5232325.jpg",
"trailer": "\_Z3QKkl1WyM"
},

Method GET: /api/movies/movie_id to get a single movie

Method PUT: /api/movies/movie_id to update a movie

Method DELETE: /api/movies/movie_id to delete a movie

## Steps to run the app

1 - clone the repo
2 - cd backend
3 - inside backend create .env file and past its content
4 - inside backend run npm install then run npm run seed and then run npm run dev
after this steps you have an admin created and a list of movies
for the admin credentials in the front you use {email:abdouaallb@gmail.com,password:123456789}
5 - cd front end
6 - inside frontend run npm install then npm run dev
