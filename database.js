const { MongoClient } = require('mongodb')

const URL = "mongodb+srv://deeksha97gupta_db_user:ha50bpoaIn1cTOic@deekshamongodb.9bmbfht.mongodb.net/"
const client = new MongoClient(URL);


async function main() {
    await client.connect();
    console.log('Client connected successfully');
    // DB name
    const dbName = client.db("Learning_table");
    // Collection Name
    const collection = dbName.collection('User');

    // Insert

    const userData = {
        firstName: "Deeksha",
        lastName: "Gupta",
        location: "Jaipur"
    }
    const insertResult = await collection.insertMany([userData]);
    console.log('Inserted documents =>', insertResult); 

    return 'done';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        client.close();
    })