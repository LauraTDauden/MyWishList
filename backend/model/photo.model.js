

module.exports = (sequelize, Sequelize) => {
    const Photo = sequelize.define ("photo", {
        description: {
            type: Sequelize.STRING
        },
        filename: {
            type: Sequelize.STRING
        }
    });

    return Photo;
};