module.exports = (sequelize, dataTypes) => {
    let alias = 'Sealed';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        content: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        stock: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        on_sale: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        new: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        featured: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'cards'
    }
    const Sealed = sequelize.define(alias, cols, config);
    
    return Sealed
};