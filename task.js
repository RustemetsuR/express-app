const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const PORT = 8000;

app.get('/:text', (req,res) =>{
    res.send('task-1 => ' + req.params.text);
});

app.get('/encode/:text', (req,res) =>{
    res.send(Vigenere.Cipher('password').crypt(req.params.text));
});

app.get('/decode/:text', (req,res) =>{
    res.send(Vigenere.Decipher('password').crypt(req.params.text));
});

app.listen(PORT,() =>{
    console.log('Server running');
})