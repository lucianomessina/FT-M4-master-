const { DataTypes } = require('sequelize');
// const {router} = require('express')
// const router = router()

module.exports = sequelize => {
  sequelize.define('Ability', {
  name:{
    type:DataTypes.STRING,
    allowNull: false,
    unique: 'atados'
  },
  description:{
    type: DataTypes.TEXT
  },
  mana_cost:{
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: 'atados'
  }
  })
}