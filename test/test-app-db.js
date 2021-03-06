const expect = require('chai').expect;
const request = require('supertest');
const Product = require("../models/Product");
const app = require("../app-db");
const mongoose = require('mongoose');
const config = require('../config/config-db');
const env = process.env.NODE_ENV || 'test';

describe("api/products", async() => {

  before(async () => {
   let p = new Promise(resolve => resolve( Product.find()));
   await p;
     
  });
    
 
  after(async () => {
    mongoose.disconnect();
  });

  it("should connect and disconnect to mongodb", async () => {
      mongoose.disconnect();
      mongoose.connection.on('disconnected',async () => {
        expect(mongoose.connection.readyState).to.equal(0);
      });
      mongoose.connection.on('connected', async() => {
        expect(mongoose.connection.readyState).to.equal(1);
      });
       await mongoose.connect(config.db[env], config.dbParams);
  });
  
  it('it should be able to find all the intialized datas', async() => {
        Product.findOne({ brand: 'Linux' })
            .then((p) => {
                assert(p.brand === 'Linux'); 
            });
        })
        Product.findOne({ brand: 'docker' })
        .then((p) => {
            assert(p.brand === 'docker'); 
        });
        Product.findOne({ brand: 'kubernetes' })
        .then((p) => {
            assert(p.brand === 'kubernetes'); 
        });

    it('should return all products', async () => {
      let p = new Promise(resolve => resolve( Product.find()));
      await p;
      const res = await request(app).get("/api/products");
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(3);
    });

    it('any other page should return 404 ',async () => {
      const res = await request(app).get("/any");
      expect(res.status).to.equal(404);
      expect(res.text).to.equal('PAGE NOT FOUND');
   });
});




