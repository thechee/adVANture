const mongoose = require('mongoose');
const vans = require('./vans');
const Van = require('../models/van');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/advanture';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database Connected');
});

const seedDB = async () => {
    // await Van.deleteMany({});
    for (let i = 0; i < 100; i++) {
        const random5 = Math.floor(Math.random() * 5);
        const van = new Van({
            make: `${vans[random5].make}`,
            model: `${vans[random5].model}`,
            year: `${vans[random5].year}`,
            rate: `${vans[random5].rate}`,
            mileage: `${vans[random5].mileage}`,
            description: `${vans[random5].description}`,
            location: `${vans[random5].location}`,
            nextMaintenance: `${vans[random5].nextMaintenance}`,
            images: [{
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQRhACaj4lamV5a4BXRKYeUpL10n7l3AEdCtanqVTIJ6ASeISaFKd&usqp=CAE&s'
            }]
        })
    await van.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})