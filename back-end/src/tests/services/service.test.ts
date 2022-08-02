import { Types } from 'mysql';
import { expect } from 'chai';
import Sinon from 'sinon';
import competitionModel from '../../../src/api/models/CompetitionResults.model';
import competitionService from '../../../src/api/services/Competition.service';

describe('Test competitionService', () => {
  const competitionModel = new competitionModel();
  const competitionService = new competitionService(competitionModel);

  describe('Test the creation of a new competition with the correct data', () => {
    const validcompetitionMock = {
        competition_name: "competição hidratacao",
        athelete_name: "Claudio", 
        value: 10, 
        unit: "ml"
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
  
      expect(competitionCreated.body).to.have.property('competition_name');
      expect(competitionCreated.body).to.have.property('athelete_name');
      expect(competitionCreated.body).to.have.property('value');
      expect(competitionCreated.body).to.have.property('unit');
    });
  });
});