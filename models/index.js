const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
   logging: false
});


const page = db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'close')
  }
})

const user = db.define('user', {
  name: {
  type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})


module.exports = {
  db, page, user
};


