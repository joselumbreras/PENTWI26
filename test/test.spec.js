var expect = require('chai').expect;
var superagent = require('superagent');

describe('Posts Api Testing', function() {

    it('retrieves all posts', function(done) {
        superagent.get('http://localhost:3000/api/posts')
            .set('Accept', 'application/json')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res.body).to.be.instanceOf(Array);
                expect(res.body.length).to.be.at.least(1);
                done();
            });
    });

    it('retrieves a single post', function(done) {
        superagent.get('http://localhost:3000/api/posts/25')
            .set('Accept', 'application/json')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res.body).to.be.instanceOf(Object);
                expect(res.body).to.contain.keys('userId', 'id', 'title', 'body');
                expect(res.body.userId).to.equal(3);
                expect(res.body.id).to.equal(25);
                expect(res.body.title).to.equal('rem alias distinctio quo quis');
                expect(res.body.body).to.equal('ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio');
                done();
            });
    });

});