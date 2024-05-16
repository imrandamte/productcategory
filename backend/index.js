const express=require('express');
const cors=require('cors');
const mysql=require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

//database connection
const db = mysql.createConnection({
    host:'localhost',   //h
    user:'root',
    password:'Jun@!d92',
    database:'simpledb',
    port:3306 
})
//check database connection
db.connect(err=>{
    if(err){console.log('err')}
    console.log('database connected...');
})
//get data
/*app.get('/products',(req,res)=>{
    
    let qr = 'select * from productlist';
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        if(result.length>0){
            res.send({
                message:'all  data',
                data:result
            })
        }
    })
})*/
//get single data
app.get('/products/:id',(req,res)=>{
    
    let gID = req.params.id;
    let qr = `select * from products where productid =${gID}`;
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        if(result.length>0){
            res.send({
                message:'get single data',
                data:result
            })
        } else{
            res.send({
                message:'data not found'
            })
        }
    })
})
// Get paginated data
app.get('/products', (req, res) => {
    const page = parseInt(req.query.page) || 1 ;
    const pageSize = parseInt(req.query.pageSize) || 10 ;

    const offset = (page - 1) * pageSize;
    let qr = `SELECT products.productid, products.productname, products.categoryid ,
    categories.categoryname FROM products 
    INNER JOIN categories ON products.categoryid = categories.categoryid LIMIT ${pageSize} OFFSET ${offset}`;


 


    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Error fetching data'
            });
            return;
        }
        if (result.length > 0) {
            res.send({
                message: 'Paginated data',
                data: result
            });
        } else {
            res.send({
                message: 'No data found'
            });
        }
    });
});



app.post('/products',(req,res)=>{
    console.log(req.body,'createdata');

    let productid =req.body.productid;
    let productname=req.body.productname;
    let categoryid=req.body.categoryid;
     

    let qr=`insert into products(productid ,productname,categoryid)
             values('${productid}','${productname}','${categoryid}')`
             db.query(qr,(err,result)=>{
                if(err){
                    console.log(err,'errs');
                }
                res.send({
                    message:'data inserted'
                })
            })
})
//update data
app.put('/products/:id',(req,res)=>{
    console.log(req.body,'updatedata');

    let gID=req.params.id;
    let productid =req.body.productid;
    let productname=req.body.productname;
    let categoryid=req.body.categoryid;
    let categoryname=req.body.categoryname;

    let qr=`update products set productname='${productname}', categoryid='${categoryid}'
    where productid =${productid}`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        res.send({
            message:'data updated'
        })
    })
})
//delete data
app.delete('/products/:id',(req,res)=>{
    let qID=req.params.id;
    let qr=`delete from products where productid='${qID}' `;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        res.send({
            message:'data deleted'
        })
    })


})

 

// create categories
app.post('/categories',(req,res)=>{
    console.log(req.body,'createcategories');
 
    let categoryid=req.body.categoryid;
    let categoryname=req.body.categoryname;

    let qr=`insert into categories(categoryid,categoryname)
             values('${categoryid}','${categoryname}')`
             db.query(qr,(err,result)=>{
                if(err){
                    console.log(err,'errs');
                }
                res.send({
                    message:'data inserted'
                })
            })
});

//get categories
app.get('/categories',(req,res)=>{
    
    let qr = 'select * from categories';
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        if(result.length>0){
            res.send({
                message:'all  data',
                data:result
            })
        }
    })
})
//delete categories
app.delete('/categories/:id',(req,res)=>{
    let sID=req.params.id;
    let qr=`delete from categories where categoryid='${sID}' `;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        res.send({
            message:'data deleted'
        })
    })


})

//update categories
app.put('/categories/:id',(req,res)=>{
    console.log(req.body,'updatedata');

    let gID=req.params.id;
    
   // let categoryid=req.body.id;
    let categoryname=req.body.categoryname;

    let qr=`update categories set categoryname='${categoryname}'
    where categoryid =${gID}`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        res.send({
            message:'data updated'
        })
    })
})
















app.listen(3300,()=>{
    console.log('server-running...');
})