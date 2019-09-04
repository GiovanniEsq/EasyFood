Introduction
Are you tired of always eating the same? Easyfood is a web app based on the MERN stack, its unique algorithm randomly decides what you will be eating during the week. Saving you time and helping you to have a variety of delirious meals.

Project Information

The frontend designs it’s complete as well as the implementation of the view. The backend accesses to a local database that runs in MONGODB and after sending a request with Express, serves the data to the view of the application in a JSON format following the MVC pattern. React Router was also implemented.
The “week” page is able to make an HTTPS request to get data from the local server and use that data in all the text components. There is a bug however that doesn’t allow react to use the roots of the direction of the images that the server provides, so it can only use the roots that are passed to the components directly.

                                  GOOGLE LOGIN DOES NOT WORK IT’S JUST THE VIEW.
                                  
The “Recipes” page, despite having the view completely finish, still needs to integrate MVC to get information from the server and use it in its components.

        
Documentation
Frontend: Because it is a React Project can be initialize using yarn start. View its oriented ONLY for smarthphones.
Backend: The server access to a mongodb application which uses just one collection called “recetas”. Both the server and the data base runs in a localhost.
      
Additional information
As it was mention, this it’s a work in progress so any suggestion or help in the development of this project would be helpful.

