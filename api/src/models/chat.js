module.exports = function (sequelize, DataTypes) {
  const Chat = sequelize.define('Chat', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    assistantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'assistants',
        key: 'id'
      }
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thread: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('createdAt')
          ? this.getDataValue('createdAt').toISOString().split('T')[0]
          : null
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('updatedAt')
          ? this.getDataValue('updatedAt').toISOString().split('T')[0]
          : null
      }
    }
  }, {
    sequelize,
    tableName: 'chats',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'chats_assistantId_fk',
        using: 'BTREE',
        fields: [
          { name: 'assistantId' }
        ]
      },
      {
        name: 'chats_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      }
    ]
  })

  Chat.associate = function (models) {
    Chat.belongsTo(models.Assistant, { as: 'assistant', foreignKey: 'assistantId' })
    Chat.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
  }

  return Chat
}
