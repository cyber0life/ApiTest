# AuraTest
### Testing a crud api that simulates extracting data from a json.

To run the api you must have node.js installed:  
      
    1. Download the repository.  
    2. Perform the command "npm i" to install all the dependencies.  
    3. Execute the server.js with the command "node run start" 
    


## .ENV FILE 
 
The "PORT" data corresponds to the port where the service will run.     

## ENDPOINTS  
      1. GET: /api/diaries
    
      Returns an array of objects with the json data.
             The response body will have this structure:  
             
             [
                    {
                        "id": 1,
                        "date": "2017-01-01",
                        "weather": "rainy",
                        "visibility": "poor",
                        "comment": "Pretty scary flight, I'm glad I'm alive"
                    },
                    {
                        "id": 2,
                        "date": "2017-04-01",
                        "weather": "sunny",
                        "visibility": "good",
                        "comment": "Everything went better than expected, I'm learning much"
                    },
                    {
                        "id": 3,
                        "date": "2017-04-15",
                        "weather": "windy",
                        "visibility": "good",
                        "comment": "I'm getting pretty confident although I hit a flock of birds"
                    },
                    {
                        "id": 4,
                        "date": "2017-05-11",
                        "weather": "cloudy",
                        "visibility": "good",
                        "comment": "I almost failed the landing but I survived"
                    }
             ]
             
             
             
             
      2. GET: /api/diaries/:id
    
      Returns an object filtered by id, if it does not exist it will return a 404.
             The response body will have this structure:  
             
             {
                  "id": 1,
                  "date": "2017-01-01",
                  "weather": "rainy",
                  "visibility": "poor",
                  "comment": "Pretty scary flight, I'm glad I'm alive"
             }
                    
             
    3. POST: //api/diaries 
    
      Saves a new object.
             The send body will have this structure:  
             
              {
                  "date": "2017-01-01",
                  "weather": "rainy",
                  "visibility": "poor",
                  "comment": "Pretty scary flight, I'm glad I'm alive"
             }
                   
                    
                    
    4. PATCH: /api/diaries/:id 
    
      Update an object filtered by id, if it does not exist it will return a 404.  
            El body de envio tendrá esta estructura para arrancar el variador:   
            
             {
                  "date": "2017-01-01",
                  "weather": "rainy",
                  "visibility": "poor",
                  "comment": "Pretty scary flight, I'm glad I'm alive"
             }  
                    
    
## TESTING  
  This example has implemented integration tests using jest and the supertest package, to run it use the command "npm run tests". The output should look like the following:
          test/diaries.test.ts
        √ TEST GET ENDPOINT (21 ms)
        √ TEST GET ENDPOINT WITH PARAMS (4 ms)
        √ TEST POST ENDPOINT WITH GOOD FORMATTED JSON (13 ms)
        √ TEST POST ENDPOINT WITH BAD FORMATTED JSON (3 ms)
        √ TEST DELETE ENDPOINT (3 ms)
        √ TEST PATCH ENDPOINT WITH GOOD FORMATTED JSON (3 ms)
        √ TEST PATCH ENDPOINT WITH BAD FORMATTED JSON (3 ms)

      Test Suites: 1 passed, 1 total
      Tests:       7 passed, 7 total
      Snapshots:   0 total
      Time:        1.008 s
     
                    
