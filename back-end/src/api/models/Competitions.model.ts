import { Model, INTEGER, STRING, BOOLEAN } from 'sequelize';
import db from '.';

class Competitions extends Model {
  public id!: number;

  public competitionName!: string;

  public inProgress!: boolean;
}

Competitions.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  competition_name: {
    type: STRING,
    allowNull: false,
  },
  in_progress: {
    type: BOOLEAN,
    defaultValue: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Competitions',
  tableName: 'competitions',
  timestamps: false,
});

export default Competitions;