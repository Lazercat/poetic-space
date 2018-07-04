const db = require('../models');

/* WEB PAGE ROUTING
*********************/
returnHome = (req, res) => {
  res.render('index');
}

/* MySQL CRUD 
********************/

/* EXPORTS
***********/
module.exports = {
  returnHome: returnHome
}
