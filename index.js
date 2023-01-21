var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
var app = express();
const { JWT_SECRET } = process.env;
const { PORT = 3000 } = process.env
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({
    "name": req.file.originalname,
    "type": req.file.mimetype,
    "size": req.file.size
  })
})




app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
