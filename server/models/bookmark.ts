import { Model, DataTypes } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class BookMark extends Model {
  public readonly id!: number;
  public user_id!: number;
  public beer_id!: number;
  public beer_name!: string;
  public beer_img!: string;
  public bookmark!: boolean;
  public review!: boolean;
  public starScore!: number;
  public star!: boolean;

  public ['getBeer.beer_name']: string;
  public ['getBeer.beer_img']: string;
  public ['getBeer.id']: number;
  public ['getBeer.getComment.rate']: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

BookMark.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    beer_id: {
      type: DataTypes.INTEGER,
    },
    bookmark: {
      type: DataTypes.BOOLEAN,
    },
    review: {
      type: DataTypes.BOOLEAN,
    },
    starScore: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: 'BookMark',
    tableName: 'BookMark',
  }
);

export const associate = (db: dbType): void => {
  db.BookMark.belongsTo(db.User, {
    foreignKey: 'user_id',
    targetKey: 'id',
  });
  db.BookMark.belongsTo(db.Beer, {
    foreignKey: 'beer_id',
    targetKey: 'id',
    as: 'getBeer',
  });
};

export default BookMark;
