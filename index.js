const express = require ('express');
const bodyParser = require('body-parser');

const app = express().use(bodyParser.json());

app.post('/webhook', (req, res) =>{
        console.log('POST: webhook');

        const body =req.body;

        if(body.object === 'page'){

                body.entry.for(entry => {
                        //se reciben y procesan los mensajes
                        const webhookEvent = entry.messsaging[0];
                        console.log(webhookEvent);
                });
                
                res.status(200).send('Evento Recibido');
        }else{
                res.sendStatus(400);
        }
       
});
       
app.get('/webhook', (req, res) =>{
        //console.log('GET: webhook');

        const VERIFY_TOKEN = 'TokenUnicoDePruebasAleex';

        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

  

                if(req.query['hub.verify_token'] === 'TokenUnicoDePruebasAleex'){
                        console.log('WEBHOOK VERIFICADO');
                        res.status(200).send(challenge);
        
                }else{
                        res.send('Entraste al WebHook');
                        console.log('ENTRASTE');
                }
        

});

app.get('/',(req,res)=>{
        res.status(200).send('HolaBot')
});
app.listen(8080,() =>{
        console.log('Servidor Iniciado...');
}); 