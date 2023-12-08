# Documentation of Online_Transaction_Diary API

### Database - 
`MYSQL`
### ORM -
`SEQUELIZE`

## Setup The Project

- Clone the repository on your local
- Execute `npm install` on the same path as root directory of your project
- Create a `.env` file in the root directory of your project and add the following environment variables
  - `PORT=3000`
  - `JWT_KEY=Secret_Key`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_LOGIN_PASS>,
    "database": "Online_Transation_Diary_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`



### User Model

- model example:

```json
{
  "username": "ayushchopra0",
  "password": "18feb2002",
  "fullname" : "Ayush Chopra"
}
```

## User API

### Routes

**Desc:** SignUp User

**Route:** `/signUp`

**Method:** `POST`

**Body:**

```json

{
    "username":"physicsapien",
    "password":"Ayush18feb",
    "fullname":"Ayush Singh"    

}
```

**Response:**

```json
{
    "success": true,
    "message": "Successfully signUp a new user",
    "data": {
        "id": 3,
        "username": "physicsapien",
        "password": "$2b$10$2GMK9LXDWQY/6V8P.C5j4O3nB/wzKspcyDviaUbNZUyXTuEqjeJ62",
        "fullname": "Ayush Singh",
        "updatedAt": "2023-06-10T17:58:00.539Z",
        "createdAt": "2023-06-10T17:58:00.539Z"
    },
    "err": {}
}
```

**Desc:** login User and sending JWT token in response 

**Route:** `/login`

**Method:** `POST`

**Body:**

```json

{
    "username":"physicsapien",
    "password":"Ayush18feb",   
}
```

**Response:**

```json
{
    "success": true,
    "message": "Successfully login a user",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJwaHlzaWNzYXBpZW4iLCJwYXNzd29yZCI6IiQyYiQxMCQyR01LOUxYRFdRWS82VjhQLkM1ajRPM25CL3d6S3NwY3lEdmlhVWJOWlV5WFR1RXFqZUo2MiIsImZ1bGxuYW1lIjoiQXl1c2ggU2luZ2giLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTEwVDE3OjU4OjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTEwVDE3OjU4OjAwLjAwMFoiLCJpYXQiOjE2ODY0MTk5ODcsImV4cCI6MTY4NjUwNjM4N30.26mtWdwyfPOO_0q2P5gmfAACDolEZ29IDckemmJMdCU",
    "err": {}
}
```

## Transaction API

### Transaction Model

- model example:

```json
{
  "Amount": 17000,
  "TransactionType": "Received",
  "PartyName" : "COMPANYABC",
  "userId" : 1
  
}
```

## Transaction API

### Routes

**Desc:** Create transaction while authenticating user first

**Route:** `/transactions`

**Method:** `POST`

**Headers**
```json

{
    "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJwaHlzaWNzYXBpZW4iLCJwYXNzd29yZCI6IiQyYiQxMCQyR01LOUxYRFdRWS82VjhQLkM1ajRPM25CL3d6S3NwY3lEdmlhVWJOWlV5WFR1RXFqZUo2MiIsImZ1bGxuYW1lIjoiQXl1c2ggU2luZ2giLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTEwVDE3OjU4OjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTEwVDE3OjU4OjAwLjAwMFoiLCJpYXQiOjE2ODY0MTk5ODcsImV4cCI6MTY4NjUwNjM4N30.26mtWdwyfPOO_0q2P5gmfAACDolEZ29IDckemmJMdCU"
}
```


**Body:**

```json

{
    "PartyName":"StarkIndustriesAKA",
    "Amount": 3000,
    "TransactionType":"received"    

}
```

**Response:**

```json
{
    "success": true,
    "message": "Successfully created a transaction",
    "data": {
        "id": 6,
        "Amount": "30000",
        "TransactionType": "received",
        "PartyName": "StarkIndustriesAKA",
        "userId": 3,
        "updatedAt": "2023-06-10T18:07:30.703Z",
        "createdAt": "2023-06-10T18:07:30.703Z"
    },
    "err": {}
}
```

**Desc:** Get transaction by Id

**Route:** `/transactions/3`

**Method:** `GET`

**Response:**

```json
{

    "success": true,
    "message": "Successfully fetched a transaction",
    "data": {
        "id": 3,
        "Amount": 25000,
        "TransactionType": "paid",
        "PartyName": "AZcZq",
        "userId": 2,
        "createdAt": "2023-06-10T11:51:56.000Z",
        "updatedAt": "2023-06-10T11:51:56.000Z"
    },
    "err": {}
}

```

**Desc:** Update transaction by Id

**Route:** `/transactions/3`

**Method:** `PATCH`

**BODY** 
```json
{
    "TransactionType":"received"
}
```
**Response:**

```json

{
    "success": true,
    "message": "Successfully updated a transaction",
    "data": {
        "id": 3,
        "Amount": 25000,
        "TransactionType": "received",
        "PartyName": "AZcZq",
        "userId": 2,
        "createdAt": "2023-06-10T11:51:56.000Z",
        "updatedAt": "2023-06-10T18:17:24.000Z"
    },
    "err": {}
}

```

**Desc:** Destory transaction by Id

**Route:** `/transactions/3`

**Method:** `DELETE`



**Response:**

```json

{
    "success": true,
    "message": "Successfully deleted a transaction",
    "data": true,
    "err": {}
}

```


**Desc:** Get All transactions specific to a user while authenticating JWT token first 

**Route:** `/transactions`

**Method:** `GET`

**Headers** 
```json
{
    "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJwaHlzaWNzYXBpZW4iLCJwYXNzd29yZCI6IiQyYiQxMCQyR01LOUxYRFdRWS82VjhQLkM1ajRPM25CL3d6S3NwY3lEdmlhVWJOWlV5WFR1RXFqZUo2MiIsImZ1bGxuYW1lIjoiQXl1c2ggU2luZ2giLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTEwVDE3OjU4OjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTEwVDE3OjU4OjAwLjAwMFoiLCJpYXQiOjE2ODY0MTk5ODcsImV4cCI6MTY4NjUwNjM4N30.26mtWdwyfPOO_0q2P5gmfAACDolEZ29IDckemmJMdCU"
}
```

**Response:**

```json

{
    "success": true,
    "message": "Successfully fetched transactions of a user",
    "data": [
        {
            "id": 6,
            "Amount": 30000,
            "TransactionType": "received",
            "PartyName": "StarkIndustriesAKA",
            "userId": 3,
            "createdAt": "2023-06-10T18:07:30.000Z",
            "updatedAt": "2023-06-10T18:07:30.000Z"
        },
        {
            "id": 7,
            "Amount": 30000,
            "TransactionType": "received",
            "PartyName": "ChopraIndustries",
            "userId": 3,
            "createdAt": "2023-06-10T18:24:59.000Z",
            "updatedAt": "2023-06-10T18:24:59.000Z"
        }
    ],
    "err": {}
}

```

