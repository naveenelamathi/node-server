const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const db = require('./db');
app.use(cors()); 
app.use(bodyParser.json()); 




// app.post('/property',async (req, res) => {
 
//   try {
    
//     const { name, description, price, address, imageUrl } = req.body;

  
//     const newProperty = await db.Property.create({
//       name,
//       description,
//       price,
//       address,
//       imageUrl
//     });

//     console.log('Property saved to the database:', newProperty);

//     res.status(201).json({
//       message: 'Property added successfully!',
//       property: newProperty
//     });
//   } catch (error) {
//     console.error('Error adding property:', error);
//     res.status(500).json({ message: 'Error adding property', error });
//   }
// });



// app.get('/getproperty', async (req, res) => {
//   try {
//     const properties = await db.Property.findAll(); 
//     res.json(properties); 
//   } catch (error) {
//     console.error('Error fetching properties:', error);
//     res.status(500).json({ message: 'Error fetching properties', error });
//   }
// });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
