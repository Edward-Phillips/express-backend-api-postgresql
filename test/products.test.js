import { expect, server, BASE_URL } from './setup';

describe('Products', () => {
  it('get products page', () => {
    server
      .get(`${BASE_URL}/products`)
      .expect(200)
      .end((err, res) => {
        expect(res.tatus).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach((m) => {
          expect(m).to.have.property('product_name');
          expect(m).to.have.property('price');
          expect(m).to.have.property('cutting_type');
        });
        done();
      });
  });
});
