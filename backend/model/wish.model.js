

module.exports = (sequelize, Sequelize) => {
    const Wish = sequelize.define ("wish", {
        item: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        filename: {
            type: Sequelize.STRING
        }
    });

    return Wish;
};