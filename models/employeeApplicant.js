const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class EmployeeApplicant extends Model {}

EmployeeApplicant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        first_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        last_name: {
            type: DataTypes.TEXT,
            allowNull: false
        }

        // address: {
        //     type: DataTypes.STRING(42),
        //     allowNull: false
        // },

        // city: {
        //     type: DataTypes.TEXT,
        //     allowNull: false
        // },

        // state: {
        //     type: DataTypes.TEXT,
        //     allowNull: false
        // },

        // zip_code: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }


    },
    {
        sequelize,
        timestamps: true,
        modelName: 'employee_applicants'
    }
)

module.exports = EmployeeApplicant