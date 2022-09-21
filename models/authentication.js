const { DataTypes } = require('sequelize');
const { db_connection } = require('../database/connection');
const Authentication = db_connection.define('authentication', {
    auth_id: {
        type: DataTypes.STRING
    },
    auth_password: {
        type: DataTypes.STRING
    }}, {
        freezeTableName: true,
        tableName: 'authentication'
    });

module.exports = { Authentication };