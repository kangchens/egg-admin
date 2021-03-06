/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('userRole', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    },
    roleId: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'role',
        key: 'id'
      },
      field: 'role_id'
    }
  }, {
    tableName: 'user_role'
  });

  Model.associate = function() {
    app.model.UserRole.belongsTo(app.model.Role,{foreignKey:'roleId',targetKey:'id'})
    app.model.UserRole.hasOne(app.model.User,{foreignKey:'id',targetKey:'userId'})
  }

  return Model;
};
