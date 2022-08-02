module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('competitions', {
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
      in_progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('competitions');
  },
};