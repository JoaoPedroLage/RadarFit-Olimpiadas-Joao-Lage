module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('athletes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      athlete_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('athletes');
  },
};