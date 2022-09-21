// Imports
const { SERVER_ERRROR } = require('../utils/constants');

// Models
const { User } = require ('../models/user');
const { Authentication } = require ('../models/authentication');

// Controllers
const getSpecificUsers = async(req, res) => {
   try {
        //const user = await User.findByPk("user_0123456789abcdefghij");
        const user = await User.findByPk(req.headers.id);
        console.log("Usuario: " , user);
       
        res.json(
            user
        );
   } catch (e) {
       console.log("Erro", e);
       res
           .status(500)
           .json( SERVER_ERRROR );
   }
};

const postUser = async(req, res) => {

    let id = req.headers.id;
    let email = req.headers.email;
    let username = req.headers.username;
    let auth = req.headers.auth;

    try {
        

        const user = await User.create({
            user_id: id,
            user_email_address: email,
            user_username: username,
            auth_id: auth
        });
        console.log(user);
        res.json(
            "Creado"
        );
    } catch (e) {
        console.log("Erro", e);
       res
           .status(500)
           .json( SERVER_ERRROR );
    }
};

module.exports = {
   getSpecificUsers,
   postUser
};