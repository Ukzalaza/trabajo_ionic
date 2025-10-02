module.exports = (sequelize, Sequelize) => {

    const Tv = sequelize.define("tv", {

        brand: {

            type: Sequelize.String
        },

        model: {

            type: Sequelize.String
        },

        inches: {

            type: Sequelize.Double
        },

        scre: {

            type: Sequelize.String
        },

    });

    return Tv;

}