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
            allowNull: false,
            validate: {
                isEmail: true
            }            
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

        felony_explanation: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        felony_if_no: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },

        if_authorized_to_work: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        name_of_high_school: {
            type: DataTypes.TEXT,
            // allowNull: false
        },

        high_school_address: {
            type: DataTypes.STRING(42),
            // allowNull: false
        },

        high_school_start: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },        

        high_school_end: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        
        did_you_graduate_hs: {
            type: DataTypes.BOOLEAN,
            // allowNull: false
        },

        high_school_diploma: {
            type: DataTypes.TEXT,
            // allowNull: false
        },

        name_of_college: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        college_address: {
            type: DataTypes.STRING(42),
            allowNull: true
        },

        college_start: {
            type: DataTypes.INTEGER,
            allowNull: true
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