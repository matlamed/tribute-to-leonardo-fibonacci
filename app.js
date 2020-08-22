const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT;

app.use('/assets', express.static('assets'));

app.get('/', (req,res)=>{
	res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(PORT,console.info(`The server is running at port ${PORT}`));