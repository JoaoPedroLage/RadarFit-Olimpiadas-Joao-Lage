import { Types, Model } from 'mysql';
import { expect } from 'chai';
import { describe } from 'mocha';

import Sinon from 'sinon';
import competitionModel, { competitionDocument } from '../../../models/competitionModel';

const functions = {
  create: Sinon.stub().resolves(),
  find: Sinon.stub().resolves(),
  findOne: Sinon.stub().resolves(),
  findOneAndUpdate: Sinon.stub().resolves(),
  findOneAndDelete: Sinon.stub().resolves(),
};

describe('Model', () => {
  const modelStub = () => functions;

  const model = new competitionModel(
    modelStub() as unknown as Model<competitionDocument, {}, {}, {}>,
  );

  it('exist', () => {
    expect(model).to.be.an('object');
  });

  it('CRUD functions exist', () => {
    expect(model.create).to.be.an('function');
    expect(model.delete).to.be.an('function');
    expect(model.read).to.be.an('function');
    expect(model.readOne).to.be.an('function');
    expect(model.update).to.be.an('function');
  });
  
  describe('CRUD functions working', () => {
    const id = '123456789';

    const validcompetition = {
      _id: new Types.ObjectId(),
      model: 'Uno da Escada',
      year: 1963,
      color: 'red',
      buyValue: 3500,
      seatsQty: 2,
      doorsQty: 2,
    };

    it('create', async () => {
      await model.create(validcompetition);

      expect(functions.create.called).to.be.true;
    });

    it('delete', async () => {
      await model.delete(id);

      expect(functions.findOneAndDelete.called).to.be.true;
    });

    it('read', async () => {
      await model.read();

      expect(functions.find.called).to.be.true;
    });

    it('readOne', async () => {
      await model.readOne(id);

      expect(functions.findOne.called).to.be.true;
    });

    it('update', async () => {
      await model.update(id, validcompetition);

      expect(functions.findOneAndUpdate.called).to.be.true;
    });
  });
});