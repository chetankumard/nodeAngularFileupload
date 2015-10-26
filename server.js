var express         =    require("express");
var multer          =    require('multer');
var app             =    express();
var filePath        =    'where you store the file';
var upload      =   multer({ dest: filePath});

app.use(multer({ dest: filePath,
    rename: function (fieldname, filename) {
        return filename+Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
    }
}));

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.get('/upload',function(req,res){
      res.sendFile(__dirname + "/public/app/index.html");
});

app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});


app.post('/api/photoFile',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});
