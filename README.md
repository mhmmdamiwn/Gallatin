# Gallatin
A gRPC server built using Node.js,Nest.js, PostgreSQL and typeorm

Install the dependencies :
```
 npm install
```

run the docker-compose.yml file for pulling the postgres database which will be used in application:
```
npm run docker-compose-up
```

and if you want to delete the containers created by docker-compose.yml file, run :
```
npm run docker-compose-down
```

for re-generating the migration files in case of any changes in database : 
```
npm run typeorm:migration:generate
```

for running the migrations :
```
npm run typeorm:migration:run
```

Run the application :
```
npm run start:dev
```
