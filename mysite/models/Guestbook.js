const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Guestbook', {
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        password: {
            filed: 'password',
            type: DataTypes.STRING(200),
            allowNull: false
        },
        message: {
            filed: 'message',
            type: DataTypes.TEXT,
            allowNull: false
        },
        regDate: {
            filed: 'reg_date',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        underscored: true,
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'guestbook'
    })
}