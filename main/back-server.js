const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
let times = 0;
const hashValues = {
    '0': 'y7K',
    '1': 'f0Z',
    '2': 'x7H',
    '3': 'pD*',
    '4': 'jG&',
    '5': 'v3F',
    '6': 'fZ=',
    '7': 's9X',
    '8': 'mQ*',
    '9': 'pS$',
    'a': 'lB=',
    'b': 'c4D',
    'c': 'wL=',
    'd': 'n6M',
    'e': 'wJ%',
    'f': 'k5L',
    'g': 'qD=',
    'h': 'z8X',
    'i': 'jW$',
    'j': 'm6C',
    'k': 'rT&',
    'l': 'u4O',
    'm': 'lH-',
    'n': 'e2Z',
    'o': 'cY+',
    'p': 'j4Y',
    'q': 'lV)',
    'r': 'i2H',
    's': 'iF%',
    't': 'o9Z',
    'u': 'eT%',
    'v': 'h8O',
    'w': 'cF=',
    'x': 'k2A',
    'y': 'rD@',
    'z': 'x6W',
    'A': 'uX&',
    'B': 'n3Y',
    'C': 'nQ@',
    'D': 'e1J',
    'E': 'dN!',
    'F': 'r2V',
    'G': 'jT!',
    'H': 'i4W',
    'I': 'eF@',
    'J': 'm3U',
    'K': 'aN!',
    'L': 'm4K',
    'M': 'tZ^',
    'N': 's7A',
    'O': 'cI(',
    'P': 'y6F',
    'Q': 'lM&',
    'R': 'x7A',
    'S': 'vP-',
    'T': 'n6C',
    'U': 'fE-',
    'V': 'r0M',
    'W': 'aK%',
    'X': 'x0O',
    'Y': 'rO^',
    'Z': 'w9Q',
    '!': 'yE@',
    '@': 'x2I',
    '#': 'eY!',
    '$': 'u4Q',
    '%': 'sY#',
    '^': 'c0O',
    '&': 'pD%',
    '*': 'f1A',
    '(': 'iO(',
    ')': 'k8D',
    '-': 'kU=',
    '=': 'u1N',
    '+': 'nX&'
  };
  
  const hashConstants = {
    '0': 53973,
    '1': 15656,
    '2': 84434,
    '3': 98142,
    '4': 68960,
    '5': 93039,
    '6': 16998,
    '7': 50450,
    '8': 87688,
    '9': 48113,
    'a': 37143,
    'b': 60517,
    'c': 86144,
    'd': 37736,
    'e': 56452,
    'f': 94345,
    'g': 12391,
    'h': 64261,
    'i': 70540,
    'j': 22306,
    'k': 35258,
    'l': 97801,
    'm': 28894,
    'n': 27060,
    'o': 87104,
    'p': 54733,
    'q': 47945,
    'r': 49257,
    's': 18283,
    't': 65825,
    'u': 84835,
    'v': 10354,
    'w': 35678,
    'x': 24004,
    'y': 44929,
    'z': 48431,
    'A': 81289,
    'B': 51386,
    'C': 57502,
    'D': 54541,
    'E': 15416,
    'F': 59720,
    'G': 83536,
    'H': 80628,
    'I': 77548,
    'J': 40939,
    'K': 76809,
    'L': 50571,
    'M': 84653,
    'N': 24036,
    'O': 49224,
    'P': 49891,
    'Q': 94805,
    'R': 14813,
    'S': 17663,
    'T': 34876,
    'U': 37179,
    'V': 55281,
    'W': 30140,
    'X': 71000,
    'Y': 18460,
    'Z': 98767,
    '!': 96460,
    '@': 85952,
    '#': 60443,
    '$': 29920,
    '%': 91457,
    '^': 86825,
    '&': 16588,
    '*': 42965,
    '(': 13893,
    ')': 56990,
    '-': 10133,
    '=': 13633,
    '+': 79618
  };
// Database code
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'users'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
});

function saltToNum(salt){
  let numSalt = 0;
  for (let letter in salt) {
    numSalt = Number(hashConstants[salt[letter]]) + Number(numSalt);
  }
  return numSalt;
}

function generateSalt() {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphaCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbol = "!@#$%^&*()-=+";
    const number = "5973142608";
    let randChoice = 0;
    let salt = "";
    let numSalt = "";
    for (let i = 0; i < 7; i++) {
      randChoice = Math.floor(Math.random() * 4);
  
      switch (randChoice) {
        case 0:
          salt = alpha[Math.floor(Math.random() * 26)] + salt;
          break;
        case 1:
          salt = alphaCaps[Math.floor(Math.random() * 26)] + salt;
          break;
        case 2:
          salt = symbol[Math.floor(Math.random() * 13)] + salt;
          break;
        case 3:
          salt = number[Math.floor(Math.random() * 10)] + salt;
          break;
      }
    }
    
    numSalt = saltToNum(salt);
    //converting salt to number
    // for (let letter in salt) {
    //   numSalt = Number(hashConstants[salt[letter]]) + Number(numSalt);
    // }
    return [salt, numSalt];
  }
  
// Function to generate hash--------------------------------------------------------------
function generateHash(password, s) {
    let hashPass = "";
    for (let letter in password) {
      hashPass = hashValues[password[letter]] + hashPass;
    }
  
    let doubleHash = 0;
    //hashing again into integers
    for (let character in hashPass) {
      //character gives index
      let hashKey = hashPass[character];
      doubleHash = hashConstants[hashKey] + doubleHash;
    }
    if(s){
      return doubleHash;
    }
  
    let [salt, numSalt] = generateSalt();
  
    doubleHash = Number(doubleHash) + (Number(numSalt)*10);
    let finalHash = String(salt+'.'+doubleHash);
    return finalHash;
}
// api to perform registration--------------------------------------------------------------------------------------

app.post('/performRegistration', (req, res) => {
    console.log(`Request was recieved ${times++}`);
    const {username, email, password, password_again} = req.body;
    const finalHash = generateHash(password, false);
    console.log(finalHash);
    let query = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';
    // inserting new user in the database
    connection.query(query, [username, email, finalHash], (error, results, field) => {
        if (error) {
            console.error('Error executing query:', error);
            return;
        }
        console.log('Query results:', results);
    });
    res.json({message: true});
});

// API to perform login-------------------------------------------------------------------------
let data; let dbPass; let backend_hash;
app.post('/performLogin', (req, res) => {
  console.log(`Login Request was recieved ${times++}`);
  const {email, password} = req.body;
  let query = 'SELECT name, email, password FROM users WHERE email = ?';
  connection.query(query, [email], (error, results, field) => {
    if(error){
      res.json({message: 'error'});
      return;
    }
    data = results;
    if(data.length == 0){
      console.log('No such user found');
      res.json({message: 0});
      return;
    }
    console.log('Query results: ', data);
    let user_salt = data[0].password.substring(0,7);
    dbPass = data[0].password.substring(8, 15);
    console.log(`Users db pass is ${dbPass}`);
    let user_numSalt = saltToNum(user_salt);
    console.log(user_numSalt);
    let hashPass = generateHash(password, true);
    console.log(Number(hashPass));
    backend_hash = String(Number(hashPass) + (Number(user_numSalt)*10));
    console.log(`Final hash pass is ${backend_hash}`);
    if(dbPass == backend_hash){
      console.log('Loggin successfull!');
      res.json({message: 1});
      return;
    }else{
      console.log('Loginn faileddd!!');
      res.json({message: 2});
    }
  });
  
  // console.log(`dbpass is ${dbPass} and backend_hash is ${backend_hash}`);
});

app.listen(5000, () => {
    console.log(`Server has started`);
});