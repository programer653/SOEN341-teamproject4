var expect = require("chai").expect;
var request = require("supertest");
var mongoose = require("mongoose");

//Data being sent to login route.
const userCredentials = {
    email: "test@gmail.com",
    password: "test123"
};

describe("GET /api/currentuser", function() {
    //POST the userCredentials to /api/login, and expect a response of status 200.
    var server = require("./index");
    var authenticatedUser = request.agent(server);

    before(function(done) {
        authenticatedUser
            .post("/login")
            .send(userCredentials)
            .end(function(err, response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
    });
    //Status code 200 should have been sent.

    it("should return a 200 response if the user can log in", function(done) {
        authenticatedUser.get("http://localhost:3000/login", function(
            err,
            response,
            body
        ) {
            response.statusCode.should.equal(200);
            body.should.include("Token");
        });
        done();
    });
    it("should return a 401 response if the credentials are invalid", function(done) {
        authenticatedUser.get("http://localhost:8000/api/login", function(
            err,
            response,
            body
        ) {
            response.statusCode.should.equal(401);
        });
        done();
    });
    after(function(done) {
        server.close(function() {
            mongoose.connection.close(done);
        });
        process.exit(0);
    });
});