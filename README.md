# Node.js microservices app

| Name             | Port    | Container       | Tech             |
|------------------|---------|-----------------|------------------|
| Proxy Service    | 4000    | node_proxy      | Node, Http proxy |
| Books Service    | 4001    | books_service   | Node, Express    |
| Books Mongo DB   | 4002    | books_mongo     | Mongo            |
| Authors Service  | 4003    | authors_service | Node, Express    |
| Authors Mongo DB | 4004    | authors_mongo   | Mongo            |

## Api examples

##### Using proxy - http://localhost:4000

| Endpoint      | HTTP Method | CRUD Method | Desciption           |
|---------------|-------------|-------------|----------------------|
| /books        | GET         | READ        | Returns all books    | 
| /books        | POST        | CREATE      | Creates book         |
| /books/:id    | GET         | READ        | Return book by id    |
| /books/:id    | PUT         | UPDATE      | Updates book         |
| /books/:id    | DELETE      | DELETE      | Deletes book         |
| /authors      | GET         | READ        | Returns all authors  |
| /authors      | POST        | CREATE      | Creates author       |
| /authors/:id  | GET         | READ        | Return author by id  |
| /authors/:id  | PUT         | UPDATE      | Updates author       |
| /authors/:id  | DELETE      | DELETE      | Deletes author       |

##### Without proxy

##### Books - http://localhost:4001

| Endpoint  | HTTP Method | CRUD Method | Desciption         |
|-----------|-------------|-------------|--------------------|
| /         | GET         | READ        | Returns all books  |
| /         | POST        | CREATE      | Creates book       |
| /:id      | GET         | READ        | Return book by id  |
| /:id      | PUT         | UPDATE      | Updates book       |
| /:id      | DELETE      | DELETE      | Deletes book       |

##### Authors - http://localhost:4003

| Endpoint  | HTTP Method | CRUD Method | Desciption           |
|-----------|-------------|-------------|----------------------|
| /         | GET         | READ        | Returns all authors  |
| /         | POST        | CREATE      | Creates author       |
| /:id      | GET         | READ        | Return author by id  |
| /:id      | PUT         | UPDATE      | Updates author       |
| /:id      | DELETE      | DELETE      | Deletes author       |


## Postman examples

https://www.getpostman.com/collections/85d6abd1e14109c836be

## To run docker compose: 

Build the images:

```sh
$ docker-compose build
```

Run the containers:

```sh
$ docker-compose up --build
```

Run the containers in detached mode:

```sh
$ docker-compose up -d
```

Run containers with the remove any orphaned containers while build with may cause eroor:

```sh
$ docker-compose up --remove-orphans
```