const UserService = require("../services/UserService");


module.exports = {
   
    getAll: async (req, res)=>{
        let json = {error:'', result:[]};

        let users = await UserService.getAll();
        if(users){
            json.result = users;
        }
        res.json(json);
    },

    getById: async(req, res) =>{
        let json = {error:'', result:{}};
        let id = req.params.id;
        let user = await UserService.getById(id);

        if(user){
            json.result = user;
        }
        res.json(json);
    },

    addUser: async(req, res) =>{
        let json = {error:'', result:{}};
        
        let nome = req.body.nome;
    
        let area = req.body.area;
        
        let cidade = req.body.cidade;
        
        let anoPlantio = req.body.anoPlantio;
        
        let custos = req.body.custos;

        let producao = req.body.producao;
        
       

        try{
            await UserService.addUser(nome, area, cidade, anoPlantio, custos, producao);
            json.result = {
                nome,
                area,
                cidade,
                anoPlantio,
                custos,
                producao
                
                
            };
        }catch(error){
            console.log(error)
        }
        res.json(json);
    },

    updateUser: async(req, res) =>{
        let json = {error:'', result:{}};
        
        let id = req.body.id;

        let nome = req.body.nome;
    
        let area = req.body.area;
        
        let cidade = req.body.cidade;
        
        let anoPlantio = req.body.anoPlantio;
        
        let custos = req.body.custos;

        let producao = req.body.producao;
        
        
        

       
        try{
            await UserService.updateUser(id, nome, area, cidade, anoPlantio, custos, producao);
            json.result = {
                id,
                nome,
                area,
                cidade,
                anoPlantio,
                custos,
                producao
            };
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },
    delUser: async(req, res) => {
        let json = {error: '', result:{}};

        await UserService.delUser(req.params.id);
        res.json(json);
    },
    

    



}