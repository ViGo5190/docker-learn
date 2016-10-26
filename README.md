# docker-learn

#build
```
     docker build -t test .
```

#tests
```
    docker run --rm test npm run test
```

#run

```
    docker run -d -p 8080:3001 --name dockertest test
```

#docker compose up

```
    docker-compose up -d
```

#docker compose down

```
    docker-compose down
```