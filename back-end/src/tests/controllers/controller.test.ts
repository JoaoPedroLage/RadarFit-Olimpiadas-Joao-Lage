import chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../../server';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test competitionController', () => {
  before(function() {
    mysql.createConnection('mongodb://mongodb:27017/competition');
  });

  after(function() {
    mysql.connection.close();
  });

  server.startServer();

  const app = server.getApp();

  describe('Testa competitionController', () => {
    const validcompetitionMock = {
      model: 'Uno da Escada',
      year: 1963,
      color: 'red',
      buyValue: 3500,
      seatsQty: 2,
      doorsQty: 2,
    };
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
  
        expect(competitionCreatedResponse.body).to.have.property('model');
        expect(competitionCreatedResponse.body).to.have.property('year');
        expect(competitionCreatedResponse.body).to.have.property('color');
        expect(competitionCreatedResponse.body).to.have.property('buyValue');
        expect(competitionCreatedResponse.body).to.have.property('seatsQty');
        expect(competitionCreatedResponse.body).to.have.property('doorsQty');
      });
    });
  });
});