module.exports = (sequelize, Sequelize) => {

    const Tv = sequelize.define("tv", {

      /*  id: {

            type: Sequelize.INTEGER,
            primaryKey: true
        },*/
        
        brand: {

            type: Sequelize.STRING
        },

        model: {

            type: Sequelize.STRING
        },

        inches: {

            type: Sequelize.DOUBLE
        },

        scre: {

            type: Sequelize.STRING
        },

    });

    return Tv;

}