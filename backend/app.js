const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const SerialPort = require("serialport");
const logger = require('./winston');
//const sp = new SerialPort("/dev/ttyAMA0", { baudRate:9600, autoOpen:false });

app.use(morgan("combined", {stream : logger.stream}));

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1029',
  database : 'mediaart'
});

app.use(express.json())
app.use(function (error, req, res, next) {
  if (error.status === 400) {
    log.info(error.body);
    return res.send(400);
  }
  console.log(error);
});


var cors = require('cors');
app.use(cors());
connection.connect();


app.get('/getTree',(req, res)=>{
  let recUserinfo = req.body.account
  logger.info(`getTree`);
  /*const msg = [
    {
        'author' : 'seyong',
        'text' : 'msg'
    }
  ]*/
  connection.query(`SELECT * FROM message`, (error, rows) => {
    if (error) throw error;
    res.send(rows)
    logger.info(`getTree: ${rows}`);
  });
});


app.post('/postMessage', (req,res) => {
    const recAuthor = req.body.author
    const recMessage = req.boey.message
    logger.info(`postMessage: ${recAuthor}, ${recMessage}`);
    connection.query(`INSERT INTO message VALUES ('${recAuthor}', '${recMessage}')`, (error) => {
        if (error) throw error;
        }
      )
      sp.open(function() {
        sp.on("error", function(error) {
            console.log("Error : ", error.message);
        });
        sp.write("1", function(error) {
            if(error) {
                return console.log("Error on write : ", error.message);
            } else {
                console.log("메세지가 정상적으로 입력되었습니다.");
            }
        });
    });
    }
)




app.listen(8000, '0.0.0.0');

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});