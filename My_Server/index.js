const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.port || 3000;
app.use(express.json())
const cors=require("cors")
app.use(cors())

//Password: hafizul2004

// User Name: SimpleUser2

const uri = "mongodb+srv://SimpleUser2:hafizul2004@cluster0.jdfwert.mongodb.net/?appName=Cluster0";

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const SmartUser=client.db("Smart")
        const UserCollection=SmartUser.collection("User")


        // Api Connect Stasrt 
        app.post("/products",async(req,res)=>{
            const newProducts=req.body;
            const result=await UserCollection.insertOne(newProducts)
            res.send(result)
        })

        app.patch("/products/:id",async(req,res)=>{
            const id=req.params.id;
            const UpdateProducts=req.body;
            const quiry={_id: new ObjectId(id)}
            const update={
                $set:{
                    name:UpdateProducts.name,
                    price:UpdateProducts.price
                }
            }
            const result=await UserCollection.updateOne(quiry,update)
            res.send(result)
        })

        app.delete("/products/:id",async(req,res)=>{
            const id=req.params.id;
            console.log("User Delete",id);
            const quiry={_id: new ObjectId(id)}
            const result=await UserCollection.deleteOne(quiry)
            res.send(result)
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});