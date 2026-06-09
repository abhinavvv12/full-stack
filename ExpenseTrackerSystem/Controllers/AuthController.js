const db = require('../config/database');

exports.registerUser = (req, res) => {

    const { email, password } = req.body;

    const sql =
    `INSERT INTO users(email,password)
    VALUES(?,?)`;

    db.run(sql, [email, password], function(err){

        if(err){
            return res.json({
                success:false,
                message:'User already exists'
            });
        }

        res.json({
            success:true,
            message:'Registration Successful'
        });

    });

};

exports.loginUser = (req, res) => {

    const { email, password } = req.body;

    const sql =
    `SELECT * FROM users
    WHERE email=? AND password=?`;

    db.get(sql, [email, password], (err,row)=>{

        if(row){

            res.json({
                success:true,
                message:'Login Successful'
            });

        }else{

            res.json({
                success:false,
                message:'Invalid Credentials'
            });

        }

    });

};