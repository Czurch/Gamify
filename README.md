# Gamify
gamify life is a location based app that helps you achieve your goals by creating challenges and progression to real life skills.


Before running backend be sure to create a postgres DB
necessary tables are:
```SQL
CREATE TABLE "user"(
	id SERIAL PRIMARY KEY,
	username VARCHAR(30),
  	email VARCHAR(255),
	password TEXT,
)
```
note: password field will change when we move away from plaintext

```SQL
CREATE TABLE profile(
    profile_id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    experience INT,
    account_level INT,
    user_id INT,
      CONSTRAINT fk_user
        FOREIGN KEY(user_id)
          REFERENCES "user"(id)
)
```

to run:

-Navigate to backend and;
1. `npm install`
2. `npm run dev`

-Navigate to frontend and;
1. `npm install`
2. `npm start`

-Run Expo Go on Phone or Virtual Device
