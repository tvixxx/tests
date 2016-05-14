
var chai = require('chai');
var should = require('chai').should();
var expect = require('chai').expect;


var slugGenerator = require('../src/slugGenerator.js');
var assert = require('assert');

var posts = [];

describe('Slug generator', function(){

    it('should cast to lower case', function(){

        var actual = slugGenerator('HElLo');
        assert.equal(actual, 'hello');
    });

    it();

    it();

    it('should replace spaces to `-`', function(){

        var actual = slugGenerator('mu ha ha');
        assert.equal(actual, 'mu-ha-ha');
    });

});

describe('Check posts', function(){

    it('should be an array', function(){
        //assert.ok(posts instanceof Array, 'posts is not array');
        posts.should.be.an.instanceOf(Array);
    });
});

//describe('Slug generator translate', function(){
//
//    it('', function(){
//
//        slugGenerator('Привет')
//            .then(function(actual){
//               actual.should.be.equal('hi');
//            }).then(done, done);
//    });
//});