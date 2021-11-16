const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
app.use(express.static(__dirname));
app.get('/api/get', (req, res) => {
  const word = req.query.word;


  var con = mysql.createConnection({
    host: "localhost",
    user: "bilguut",
    password: "Biki_123"
  });
  
  con.connect(function(err) {
    if (err) 
    {
      throw err;
    }
  console.log("Connected!");
   
  });
 //res.send('Connected' +" " + word);

 con.query("SELECT * FROM entries.entries where word='"+ word+"'", function(err,result,fields)
 {
  if (err) throw err;
  res.send(JSON.stringify(result));
  console.log(result);
  console.log(JSON.stringify(result));
 });

})

app.get('/', (req,res) =>
{
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

