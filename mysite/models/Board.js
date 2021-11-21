const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Board', {
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(200),
            allowNull: false
        },
        content: {
            field: 'content',
            type: DataTypes.TEXT,
            allowNull: false
        },
        hit: {
            field: 'hit',
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        regDate: {
            field: 'reg_date',
            type: DataTypes.DATE,
            allowNull: false,
            defalutValue: Sequelize.NOW
        },
        groupNo: {
            field: 'group_no',
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        orderNo: {
            field: 'order_no',
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        depth: {
            field: 'depth',
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        userNo: {
            field: 'user_no',
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        deleteFlag: {
            field: 'delete_flag',
            type: DataTypes.ENUM('Y', 'N'),
            allowNull: false,
            deleteValue: 'N'
        }
    }, {
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        createAt: false,
        updateAt: false,
        tableName: 'board'
    })
}