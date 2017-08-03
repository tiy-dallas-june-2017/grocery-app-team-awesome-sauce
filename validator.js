const expressValidator = require('express-validator');
//These are the input errors for the 'Add an item' page.

req.check('name', 'Name can not be empty').notEmpty(); //checking for empty name.

req.check('name', 'Your name can not be longer than 100 characters').isLength({ min: 0, max: 100}); //checking for character length

// Still need error message for 0 quantity and price.

req.getValidatorResult().then(function(result){
  if(result.isEmpty()){
    res.render('/error', req.body)
  } else {
    res.render('/inventorydetail', data)
  };
});
