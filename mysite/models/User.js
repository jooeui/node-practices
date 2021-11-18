const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('User', {       // User라는 객체는 다음과 같이 정의되어있다!
        no: {
            field: 'no',    // 컬럼명
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email: {
            filed: 'email',
            type: DataTypes.STRING(200),
            allowNull: false
        },
        password: {
            filed: 'password',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        gender: {
            filed: 'gender',
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false
        },
        joinDate: {
            filed: 'join_date',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        role: {
            filed: 'role',
            type: DataTypes.ENUM('USER', 'ADMIN'),
            allowNull: false,
            defaultValue: 'USER'
        },
    }, {
        underscored: true,
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,        // 처음에는 createAt을 true로 하지만 이후에는 false... 데이터 다 날라감 ..!!!!
        tableName: 'user'
    })
       
}