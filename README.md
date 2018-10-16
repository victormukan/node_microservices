# Node.js microservices app

| Name             | Port    | Container       | Tech           |
|------------------|---------|-----------------|----------------|
| Books Service    | 4001    | books_service   | Node, Express  |
| Books Mongo DB   | 4002    | books_mongo     | Mongo Db       |
| Authors Service  | 4003    | authors_service | Node, Express  |
| Authors Mongo DB | 4004    | authors_mongo   | Mongo Db       |

## To run docker compose: 

Build the images:

```sh
$ docker-compose build
```

Run the containers:

```sh
$ docker-compose up
```

Run the containers in detached mode:

```sh
$ docker-compose up -d
```

Run containers with the remove any orphaned containers while build with may cause eroor:

```sh
$ docker-compose up --remove-orphans --force-recreate
```