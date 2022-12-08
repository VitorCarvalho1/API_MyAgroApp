const db = require('../db');

module.exports = {
    getAll: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query(`SELECT * FROM infoUsers`, (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        })
    },

    getById: (id) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query(`SELECT * FROM infoUsers WHERE id =?`, [id], (error, results)=>{
                if(error) { rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            })
        })
    },

    addUser: (nome, area, cidade, anoPlantio, custos, producao) =>{
        return new Promise(async (aceito, rejeitado)=>{
    

            db.query('INSERT INTO infoUsers (nome, area, cidade, anoPlantio, custos, producao) VALUES(?,?,?,?,?,?)', 
                [nome, area, cidade, anoPlantio, custos, producao], (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertId);
              
                }
            );  
        });
    },

    updateUser: (id, nome, area, cidade, anoPlantio, custos, producao) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE infoUsers SET nome = ?, area = ?, cidade = ?, anoPlantio = ?, custos = ?, producao = ? WHERE id = ?', 
                [nome, area, cidade, anoPlantio, custos, producao, id], (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results);
              
                }
            );
        });
    },
    delUser: (id)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM infoUsers WHERE id=?', [id], (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        })
    },
};