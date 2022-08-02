import { Types } from 'mysql';
import { expect } from 'chai';
import Sinon from 'sinon';
import competitionModel from '../../../models/competitionModel';
import competitionService from '../../../services/competitionService';

describe('Test competitionService', () => {
  const competitionModel = new competitionModel();
  const competitionService = new competitionService(competitionModel);

  describe('Test the creation of a new competition with the correct data', () => {
    const validcompetitionMock = {
      _id: new Types.ObjectId(),
      model: 'Uno da Escada',
      year: 1963,
      color: 'red',
      buyValue: 3500,
      seatsQty: 2,
      doorsQty: 2,
    };
    
    before(() => {
      Sinon.stub(competitionModel, 'create').resolves(validcompetitionMock);
    });
  
    after(() => {
      (competitionModel.create as Sinon.SinonStub).restore();
    });
  
    it('Tests whether an object is returned in the response body', async () => {
      const competitionCreated = await competitionService.create(validcompetitionMock);
  
      expect(competitionCreated).to.be.an('object');
    });
  
    it('Tests if the returned object has the expected data', async () => {
      const competitionCreated = await competitionService.create(validcompetitionMock);
  
      expect(competitionCreated).to.have.property('model');
      expect(competitionCreated).to.have.property('year');
      expect(competitionCreated).to.have.property('color');
      expect(competitionCreated).to.have.property('buyValue');
      expect(competitionCreated).to.have.property('seatsQty');
      expect(competitionCreated).to.have.property('doorsQty');
    });
  });
});