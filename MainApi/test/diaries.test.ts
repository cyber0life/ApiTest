import request  from "supertest";
import {app, server} from "../src/index";


//TESTING FOR GET REQUESTS

test("TEST GET ENDPOINT", async () => {
    const test = await request(app).get("/api/diaries");
    expect(test.status).toEqual(200);
    expect(test.type).toEqual('application/json')
});

test("TEST GET ENDPOINT WITH PARAMS", async () => {
    const  test = await request(app).get("/api/diaries/1");
    expect(test.status).toEqual(200 || 404);
    expect(test.type).toEqual('application/json')
  });



//TESTING FOR POST REQUESTS

test("TEST POST ENDPOINT WITH GOOD FORMATTED JSON", async () => {
    const  test = await request(app).post("/api/diaries").send(
        JSON.parse(`{
        "date": "2017-04-01",
        "weather": "sunny",
        "visibility": "good",
        "comment": "Everything better than expected, I'm learning much"
        }`));
    expect(test.status).toEqual(200);
    expect(test.type).toEqual('application/json');
  });


test("TEST POST ENDPOINT WITH BAD FORMATTED JSON", async () => {
    const  test = await  request(app).post("/api/diaries").send( 
        JSON.parse(`{
        "da": "2017-04-01",
        "weather": "sunny",
        "visiby": "good",
        "comment": "Everything better than expected, I'm learning much"
        }`));
    expect(test.status).toEqual(400);
    expect(test.type).toEqual('text/plain')
  });


//TESTING FOR DELETE REQUESTS

test("TEST DELETE ENDPOINT", async () => {
    const  test = await request(app).get("/api/diaries/1");
    expect(test.status).toEqual(200 || 404);
    expect(test.type).toEqual('application/json')
  });


//TESTING FOR PATCH REQUESTS

test("TEST PATCH ENDPOINT WITH GOOD FORMATTED JSON", async () => {
    const  test = await request(app).patch("/api/diaries/1").send( 
        JSON.parse(`{
        "date": "2017-04-01",
        "weather": "sunny",
        "visibility": "good",
        "comment": "Everything better than expected, I'm learning much"
        }`));
    expect(test.status).toEqual(200);
    expect(test.type).toEqual('application/json' || 'text/plain')
  });


  test("TEST PATCH ENDPOINT WITH BAD FORMATTED JSON", async () => {
    const  test = await request(app).patch("/api/diaries/14").send( 
        JSON.parse(`{
        "date": "2017-04-01",
        "weFGather": "sunny",
        "visVibility": "good",
        "comment": "Everything better than expected, I'm learning much"
        }`));
    expect(test.status).toEqual( 400);
    expect(test.type).toEqual('text/plain')
  });
//CLOSING SERVER TO PREVENT THE JEST PROCESS FROM STAYING OPEN
  afterAll(()=> {
    server.close();
  })