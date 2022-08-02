import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Athletes extends Model {
  public id!: number;

  public athleteName!: string;
}

Athletes.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  athlete_name: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Athletes',
  tableName: 'athletes',
  timestamps: false,
});

export default Athletes;
