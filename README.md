
# Personal Expense Tracker using Node.js and MongoDB

This is a simple Expense Tracker API built using Node.js and SQLite. It allows you to manage transactions and view summaries of income and expenses.

# Setup Instructions:

## Installation of Software:
    - Install Node.js locally from https://nodejs.org/en
    - Install MongoDB locally from https://www.mongodb.com/try/download/community
                                or
    - Install MongoDB Atlas


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```


## Replace your mongoDB URL:
    - replace this mongoDB url in app.js with your mongoDB copy string

## Run the server:
    - node app.js
          or 
    - npm start

# API Documentation:

## Base URL
    - The API is accessible at: http://localhost:3000/api/
    - For the better experience use vs code and install Thunder client extension to view outputs with the platform

## End points

    1. Add a New Transaction:
        URL: /transactions
        Method: POST
        Description: Add a new income or expense transaction.
        Body:json
        Use code
        {
            "type": "income or expense",
            "category_id": 1,
             "amount": 100.50,
            "date": "2024-10-23",
            "description": "Salary for October"
        }


    2. Get All Transactions:
        URL: /transactions
        Method: GET
        Description: Retrieve a list of all transactions.
        Response:
        Success (200):
        json
        Use code
        [
            {
                "id": 1,
                "type": "income",
                "category_id": 1,
                "amount": 100.50,
                "date": "2024-10-23",
                "description": "Salary for October"
            }
    
        ]


    3. Get a Specific Transaction by ID:
        URL: /transactions/:id
        Method: GET
        Description: Retrieve a specific transaction by its ID.
        Response:
        Success (200):
        json
        Use code
            {
                "id": 1,
                "type": "income",
                "category_id": 1,
                "amount": 100.50,
                "date": "2024-10-23",
                "description": "Salary for October"
            }


    4. Update a Transaction
            URL: /transactions/:id
            Method: PUT
            Description: Update an existing transaction by ID.
            Body:
            json
            Use code
            {
                "type": "expense",
                "category_id": 2,
                "amount": 50.00,
                "date": "2024-10-24",
                "description": "Groceries"
            }
           

    5. Delete a Transaction:
        URL: /transactions/:id
        Method: DELETE
        Description: Delete a transaction by its ID.
        Response:Success (200):
       
    

     6. Get Summary of Income, Expense, and Balance
        URL: /transactions/summary
        Method: GET
        Description: Retrieve a summary of total income, total expense, and the balance.
        Response: Success (200):
        json:
        Use code
        {
            "total_income": 100.50,
            "total_expense": 50.00,
            "balance": 50.50
        }




# Screenshots:

## Post a transaction:

![App Screenshot](https://res.cloudinary.com/dbedhqjpl/image/upload/v1729659515/POST-transactions_sjoga5.png)

## Get all transactions:

![App Screenshot](https://res.cloudinary.com/dbedhqjpl/image/upload/v1729659515/GET-transactions_inpfxu.png)

## Get a transaction by ID:

![App Screenshot](https://res.cloudinary.com/dbedhqjpl/image/upload/v1729659515/GET-transaction-by-id_hj5pur.png)

## Update a transaction:

![App Screenshot](https://res.cloudinary.com/dbedhqjpl/image/upload/v1729659515/PUT-transactions_ntrp1w.png)

## Delete a transaction:

![App Screenshot](https://res.cloudinary.com/dbedhqjpl/image/upload/v1729659515/DELETE-transactions_tpaodi.png)

## Summary of a transaction:

![App Screenshot](https://res.cloudinary.com/dbedhqjpl/image/upload/v1729659515/GET-Summary_cu3bpd.png)

