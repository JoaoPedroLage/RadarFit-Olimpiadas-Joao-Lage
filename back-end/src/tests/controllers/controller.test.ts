import chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../api/server';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test competitionController', () => {
  before(function() {
    mysql.createConnection('http://localhost:3001/competitions_results');
  });

  after(function() {
    mysql.connection.close();
  });

  server.startServer();

  const app = server.getApp();

  describe('Testa competitionController', () => {
        const validcompetitionMock = {
        competition_name: "competição hidratacao",
        athelete_name: "Claudio", 
        value: 10, 
        unit: "ml"
    }
    describe('create()', () => {
      it('Tests if the request for the route POST returns 201 with a valid body', async () => {
        const competitionCreatedResponse = await chai.request(app).post('/competitions').send(validcompetitionMock);
  
        expect(competitionCreatedResponse.status).to.be.equal(201);
      });
  
      it('Tests whether an object is returned in the response body', async () => {
        const competitionCreatedResponse = await chai.request(app).post('/competitions').send(validcompetitionMock);
    
        expect(competitionCreatedResponse.body).to.be.an('object');
      });
  
      it('Tests if the returned object has the expected data', async () => {
        const competitionCreatedResponse = await chai.request(app).post('/competitions').send(validcompetitionMock);
  
        expect(competitionCreatedResponse.body).to.have.property('competition_name');
        expect(competitionCreatedResponse.body).to.have.property('athelete_name');
        expect(competitionCreatedResponse.body).to.have.property('value');
        expect(competitionCreatedResponse.body).to.have.property('unit');
      });
    });
  });
});

function before(arg0: () => void) {
  throw new Error('Function not implemented.');
}


function after(arg0: () => void) {
  throw new Error('Function not implemented.');
}
