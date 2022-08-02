module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('competition-results', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      competition_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      athelete_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('competition-results');
  },
};