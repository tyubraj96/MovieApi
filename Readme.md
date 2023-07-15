A movie_api based on mongodb and express and node js. 

It is a working api where we can add movie , retrieve movie and get movie from database and even get recommendation from the OpenAI client 
from database of mongodb. 

## Usage 
* For usage just clone the repository .
* Make sure node package manager(NPM ) is installed. 
* Install Express , mongoose , openai ,dotenv,and nodemon. 
* Create a .env file on the root folder and add following in the same format : 
  * mongo_connection=mongodb+srv://<your_username>:<your_password>@movie-api.60fkejq.mongodb.net/moviesdb?retryWrites=true&w=majority
  * OPENAI_API_KEY=<OpenAI client authorization key ) . 
* Make sure that the mongodb collection is named as "moviesdb".

## Routes 
 All the routes can be found under the App.js files . 
### Get list of all movie . 
```http
  GET /api/movie
```
### Add a movie 
```http
  GET /api/items
```
### Get list of single movie . 
```http
  GET /api/movie/movie_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `movie_id`      | `string` | **Required**. Id of movie to fetch |
### Update Movie 
```http
  PATCH /api/movie
```
### Delete movie 
```http
  DELETE /api/movie/movie_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `movie_id`      | `string` | **Required**. Id of movie to fetch |
### Get Recommendations
```http
  GET /api/openai/getrecommendations
```




