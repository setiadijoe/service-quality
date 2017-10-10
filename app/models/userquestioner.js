'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserQuestioner = sequelize.define('UserQuestioner', {
    UserId: DataTypes.INTEGER,
    QuestionerId: DataTypes.INTEGER,
    nilai_harapan: DataTypes.INTEGER,
    nilai_kenyataan: DataTypes.INTEGER,
    nilai_gap: DataTypes.INTEGER,
    nama_instruktur: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserQuestioner;
};