# Reviews Website 
## Made With: 
![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white) ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## App Screenshot
### Login Page
![image](https://user-images.githubusercontent.com/75917932/209456731-0f7baea3-629e-410b-bea1-248af78c95b2.png)

### Reviews Page
![image](https://user-images.githubusercontent.com/75917932/209456777-9e68fb25-b9fb-42df-adf8-51cadf2fdd8b.png)

### Create Review Page
![image](https://user-images.githubusercontent.com/75917932/209456808-46963bc3-6e58-4a8e-b1ab-c9850ecdf22f.png)

### Edit Review Page
![image](https://user-images.githubusercontent.com/75917932/209456815-1af51d02-f7ac-409c-8c7c-0f0345979274.png)

### Delete Review Prompt
![image](https://user-images.githubusercontent.com/75917932/209456825-d47eb7c5-e2b6-474b-b0e6-cec986cf61eb.png)


## What is this Project ?

This project is built to create, read, update, and delete reviews of the user. A user can only do these operations on his/her own posted reviews.

## How to Build ?

All usage instruction and information update on [LARAVEL-README.md](https://github.com/celsodasecond/laravel-vue-crud/blob/master/LARAVEL-README.md).

## To test without registering, use:
| Email: Johndoe+1@gmail.com \
| Password: T@ste123

## Development

#### Bugs:
1. After loggin in, it does not route to the dashboard page. You must refresh the page in order to proceed to the dashboard page. Upon checking, the 'user' has created a token however, laravel warns that the login and logout methods cannot be used as GET methods. 

#### To-Do:
1. Because of Bug (#1), creating a Review is non-functional. 
2. The REVIEWS component of the application cannot do CRUD Operations in the database because of Bug (#1), but the USERS (LOGIN/REGISTRATION) components works fine and the user's credentials (Email, Name, Password, and Remember_Token) gets inserted into the database. 

#### Built With

- [Laravel](https://laravel.com/) 
- [Vue JS](https://vuejs.org/)
- [Tailwind Css for Vite](https://tailwindcss.com/docs/guides/vite)

#### Clone Project

```shell
https://github.com/celsodasecond/laravel-vue-crud.git
```

This Command will copy a full project to your local environment

