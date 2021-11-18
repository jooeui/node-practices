const { Sequelize, DataTypes } = require('sequelize');
const user = require('../controllers/user');

const sequlize = new Sequelize({});

const User = sequlize.define('User', {       // User라는 객체는 다음과 같이 정의되어있다!
    no: {
        field: 'no',    // 컬럼명
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    name: {

    },
    email: {

    }
}, {
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updateAt: false,        // 처음에는 createAt을 true로 하지만 이후에는 false... 데이터 다 날라감 ..!!!!
    tableName: 'user'
})

User.create({
})

User.findOne({
    // where:
})