const { Router, query } = require('express');
const { Op, Character, Role } = require('../db');
const Character = require('../db/models/Character');
const router = Router();

router.post('/', async (req,res)=>{ //Hacemos un post a la ruta '/'
const {code, name, age, race, hp, mana, date_added} = req.body //Sacamos estas propiedades del body

if(!code || !name || !hp || !mana){ //Si algunas de las obligatorias NO nos llega, retornamos un error diciendo q faltan datos obligatorios
  return res.status(404).send('Falta enviar datos obligatorios')
}
})
try { //Hacemos un trycatch en caso de exito y error
    const charac = await Character.create({code, name, hp, mana, age, date_added }) //Si nos llega bien, creamos un persona con los datos que nos envian
} catch (error) {9
   return res.status(404).send('Error en alguno de los datos provistos') //Si NO nos llega bien consologeamos un errror
}

router.get('/', async (req,res)=>{ //Hacemos un get a la ruta, otro asincronico mas
const {race} = req.query; //Sacamos race del query

try { //Hacemos un trycatch en caso de exito y de error
    if(race){ //Y hacemos un if else en caso de dos exitos distintos
        const characts = await Character.findAll({ //Si nos llega race por query, devolvemos todos los personajes con la raza que nos pidio el cliente
            where:{race: race}})
            return res.json(characts)
    }else{
        const characts = await Character.findAll() //Sino nos llega race, solo nos esta pidiendo los personajes, sin ninguna raza especifica, entonces devolvemos todos
        return res.json(characts)
    }

} catch (error) { //En caso de error lo consologeamos
    console.log(error)
}
})

router.get('/"code', async(req,res)=>{
    const {code} = req.params;
   try {
    if(code){
        const charact = await Character.findByPK(code)
        return res.json(charact)
    }else{
        res.status(404).send(`El codigo ${code} no corresponde a un personaje existente`)
    }
   } catch (error) {
    console.log(error)
   }
})

module.exports = router;