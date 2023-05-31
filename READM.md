# Casa T

<br>



## Description

Casa T is an ONG in Lisbon that helps trans refugees.
The project is going to be a full-stack web app for the ONG that will allow people to get information about the organization.
In the web app, the focus is to create tolls to do donations, get information about events, allow subscribers to subscribe as a membership and pay a monthly fee (you can choose the amount) to help finance the house, see places to get free exams (HIV, Sifilis, hepatitis, etc.), etc.



<br>

## User Stories

### User Experience
- **Navbar** - The user sees a nav bar at the top of the Website. The Navbar is showned on everypage of the website. The Navbar shows the buttons: Home, About us, Events, Donates. The user also sees the Profile button on the right side that opens a hidden menu with the buttons LogIn and Signup if there is no user in session or Logout if there is a user in session. Each button will have links to their respective page. If the user tries to open Favourites or Follows and there is no user in session, a message will appear informing the user it must login before being able to navigate to those pages.
- **Signup** - The user sees a container centered in the screen that allows to input name, email, password and confirm password fields. The user receives an error message if there is an error filling the form and a success message if the signup is successful.
- **Login** - The user sees a container centered in the screen that allows to input email and password fields. The user receives an error message if there is an error filling the form and a success message if the login is successful. After login the name of the user appears next to the profile button on the NavbAr
- **Payments** - A page with payments methods. You can subscribe as a membership and the marketing box insert a value to donate montly by card or bank account.
- **Logout** - The user clicks on the profile icon and is able to see the buttons profile and logout. When logout is clicked, the user session finnishes and the user name disappears from next to the profile button. The user is redirected to the homepage.
- **Home page** - The Home page will contain an introductory message about the organization, with some pictures. Scroll down can contain a footer with links to social medias and hiperlink to about us.
- **About Us** - A simple web page to tell a bit of the history and background, some pictures and links to social media.
- **Events** - A web page to insert events, like partys, free marketing, dinners, etc. (Hiperlinks)
- **Donates** - A page to allow donates.

### Error Handling
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              |**Request - Body**                                        |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/home`                            | Main page route.  Renders `home`  view.                      | N/A                                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  | N/A                                                      |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/login`                           | Renders `login` form view.                                   | N/A                                                      |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `POST`     | `/logout`                          | Sends Logout request to the server.                          | N/A                                                      |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             | {name, email, password}                                  |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { name, email, password }                    |
| `GET`      | `/private/payments`               | Private route. Render the `payments` view.                  | {userId, [collectionID]}                                 |
| `POST`     | `/private/payments`               | Private route. Adds a new favorite for the current user.     | {userId, [collectionID]}                                 |
| `DELETE`   | `/private/payments/:collectionId` | Private route. Deletes the existing favorite from the current user. | {userId, [collectionID]}                          |

<br>

## API's


<br>


## Packages

IronLauncher
Bootstrap
UI
React-dom
Vite
npm install

<br>

## Backlog

<br>


## Links

### Git

[Repository Link](https://github.com/Ricozzo/casat)

<!-- [Deploy Link]() -->

<br>

### Slides

Link to be provided later


<br>

### Contributors
Henrique Ortiz - [`github`](https://github.com/Ricozzo) - [`Linkedin`](https://www.linkedin.com/in/henriqueortizpereira/)

Roobson Batista - [`github`](https://github.com/RobBatista) - [`Linkedin`](https://www.linkedin.com/in/robsonbatista1/)