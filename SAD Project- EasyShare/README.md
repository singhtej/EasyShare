# Software Architecture & Development------  EasyShare

Tejveer Singh 11010863


Description:
Intention of  building this application is to provide a platform where people can easily split their expenditures which they did with their friends . As an example: two friends went for outing somewhere and they paid randomly without having calculation of who paid what,  and in the end of trip one of them has created EASYSHARE  put all expenses He / She had made while on trip and added his friend on EASYSHARE with whom they were on trip to distribute all expenses equally.

Execution Steps:
1.Clone the repository
2.In client and api folder perform " npm install " if required in command prompt
3.Start the application using command "npm start" for both api and client
4.API is running on port 5000 and Clinet is running on port 3000
5.Register on website
6.Login
7.Profile
8.Add expenses in Dashboard
9.view expenses in Dashboard



API

GET:
http://localhost:5000/user/profile/:id - by UserID fetch all user details

http://localhost:5000/user/dashboard/:id - by USERID fetch dashboard details

http://localhost:5000/user/expenselist/:email - by Users email fetch expense list

POST:
http://localhost:5000/user/register - save users registration details into the database

http://localhost:5000/user/login - check the user is authorized and get the token

when users log in the token is set for one minute , after that the token will expire.

Middleware.js – verify the users based on Token before they access the api.

Secret key is stored in process.env.SECRET_KEY


http://localhost:5000/user/expense



NOTE: I am using MongoDB Server. My Database Name is easyShare. I have two Collections in our DB :- users, userexpenses.
In users document, I have 7 documents first_name, last_name, email, password, expAmount, youOwe, youGet, date.

In userexpenses document, I have 6 documents createdBy, withWhom, expName, expAmount, expDes, date.