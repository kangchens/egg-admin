/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('nav', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'title'
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'link'
    },
    postion: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'postion'
    },
    isOpennew: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'is_opennew'
    },
    sort: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'sort'
    },
    relation: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'relation'
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'status'
    },
    addTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'add_time'
    }
  }, {
    tableName: 'nav'
  });

  Model.associate = function() {

  }

  return Model;
};
