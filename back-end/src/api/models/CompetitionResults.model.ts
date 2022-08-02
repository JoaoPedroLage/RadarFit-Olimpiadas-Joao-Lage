import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class CompetitionResults extends Model {
  public id!: number;

  public value!: number;

  public unit!: string;

  public competitionName!: string;

  public atheleteName!: string;
}

CompetitionResults.init({
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
  athelete_name: {
    type: STRING,
    allowNull: false,
  },
  value: {
    type: INTEGER,
    allowNull: false,
  },
  unit: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'CompetitionResults',
  tableName: 'competition-results',
  timestamps: false,
});

export default CompetitionResults;
