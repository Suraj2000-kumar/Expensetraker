const mongoose = require('mongoose');



const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://me:h9D1fvhcVjmM9V7g@expenses-tracker.q8lpbcs.mongodb.net/expenses-tracker-db?retryWrites=true&w=majority&appName=expenses-tracker",{
            
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`DB connected successfully`);
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;