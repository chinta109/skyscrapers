const { config, engine } = require('express-edge');
const express = require('express')
/*const path = require('path')*/
const webpage = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')



/*controllers register*/
const createPostController = require('./Controllers/createPost')
const homePageController = require('./Controllers/homePage')
const storePageController = require('./Controllers/storePage')
const getPostController = require('./Controllers/getPost')
const createUserController = require('./Controllers/createUser')
const storeUserController = require('./Controllers/storeUser')
const LoginController = require('./Controllers/Login')
const userloginController = require('./Controllers/userlogin')

const firstpageController = require('./Controllers/firstpage')
const secondpageController = require('./Controllers/secondpage')
mongoose.connect('mongodb://localhost/node-js-blog')


webpage.use(express.static('Public'))
webpage.use(engine)
webpage.use(bodyParser.json())
webpage.use(bodyParser.urlencoded({extended: true}))

/*middleware*/


/*** Routers ***/

/* index page */
webpage.get('/index', homePageController)

/*webpage.get('/',(req,res)=>{
    res.render('index')
})*/

/* create page */
webpage.get('/newpost',createPostController)

/*browser to post data typed in blog page*/
webpage.post('/',storePageController)

/*Login page route*/
webpage.get('/auth/login',LoginController)

/*Login button route*/
webpage.post('/users/login',userloginController)

/*new user registration page*/
webpage.get('/auth/register',createUserController)

/*saving new user in database */
webpage.post('/users/register',storeUserController) 



/*contact page*/
webpage.get('/contact.html',(req,res)=>{
    res.render('contact')
})

/*retrieving database post page*/
webpage.get('/post/:id', getPostController)


/*transaction page testing*/
webpage.get('/AfterLoginFIrstPage/:id',firstpageController)
webpage.get('/AfterLoginSecondPage/:id',secondpageController)


webpage.listen(7000,()=>{
    console.log('webpage is listening on port 7000')
})

// webpage.get('/',(req,res)=>{

//     res.sendfile()
// })


// webpage.listen(5000,()=>{

//     console.log('Yes am listening Buddy..!!')
// })