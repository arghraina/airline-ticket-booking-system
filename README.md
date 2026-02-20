- here we will use the ORM `sequalize` to make the connection between the MySQL and the our backend.

- What ORM(Object-relational mapping) does is that it basically reduces the syntax of the traditional relational databases. Like in sequelize, to fetch all the information, we do `select * from table` , but ORMs make it quite more readable and easy by writing `table.findAll()`. This is why , we use ORMs for this mapping with traditional SQL.
- We use `SEQUALIZE CLI` to make our life easier to code.

- we have to do `cd src` and then run `npx sequelize init` and we will get folders like migration, seeders and config.json.
Basically in `config.json` we have development, production and test environment. 
It is basically that developers can't test their code or features on the actual production database.. They will test it on a development database.. And then testers test it on some other test database.
Development key has features like, username and password, database name, host (for development will be my computer , i.e, `localhost or 127.0.0.1`) and dialect or the database language we are using.
As this `config.json` contains the sensitive informations so include the config.json file in the .gitignore.

- - command `npx sequelize db:create` creates the databse names what you named in the `config.json`... We can see these command in the official documentation.
- - we can write the model create command and it will automatically give us the JS files in the model folder... We can see the model commands from official documentation.

- - Baically what happens is that when we do model create , it creates the JS file as well as adds a file in the `migrations folder`.. What it means is that actual database isnt created yet. It asks you if you want to make any changes then make them in the migrations folder. And then we when commit that using command `npx sequelize db:migrate` , this will create the database.

- And finally our `repository` folder talks to models or DataBase.

- Coming to React Router.... Here, we have used to React Router. What it does is basically that instead of everytime using app.get() or app.post() , etc requests, we made a router folder, which holds all the routes. There, we used a `React Router`, which basically creates a module for that file and we can simple export that `Router` . And, using the `app.use()` , we can get that router and redirect to that router module. 
