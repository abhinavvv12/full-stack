const db = require('../config/database');

exports.addTransaction = (req,res)=>{

    const {
        email,
        title,
        amount,
        type,
        category
    } = req.body;

    const sql =
    `INSERT INTO transactions
    (email,title,amount,type,category)
    VALUES(?,?,?,?,?)`;

    db.run(sql,
    [email,title,amount,type,category],
    function(err){

        if(err){

            return res.json({
                success:false
            });

        }

        res.json({
            success:true
        });

    });

};

exports.getTransactions = (req,res)=>{

    const email = req.params.email;

    const sql =
    `SELECT * FROM transactions WHERE email=?`;

    db.all(sql,[email],(err,rows)=>{

        res.json(rows);

    });

};

exports.deleteTransaction = (req,res)=>{

    const id = req.params.id;

    const sql =
    `DELETE FROM transactions WHERE id=?`;

    db.run(sql,[id],function(err){

        res.json({
            success:true
        });

    });

};