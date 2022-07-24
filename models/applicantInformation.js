const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class applicantInformation extends Model {}

applicantInformation.init(
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
        },

        middle_initial: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },

        address: {
            type: DataTypes.STRING(42),
            allowNull: false
        },

        city: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        state: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        country: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(30),
            allowNull: false
        },

        phone_number: {
            type: DataTypes.STRING(12),
            allowNull: false
        },

        citizen_US: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        worked_for_this_company: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        convicted_of_felony: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        felony_if_yes: {
            type: DataTypes.TEXT
        },

        felony_if_no: {
            type: DataTypes.BOOLEAN
        },

        if_authorized_to_work: {
            type: DataTypes.TEXT
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'applicant_information'


    }
)

module.exports = applicantInformation