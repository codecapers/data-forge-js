'use strict';


describe('LazySeries', function () {
	
	var LazySeries = require('../lazyseries');
	var DateIndex = require('../dateindex');
	
	var expect = require('chai').expect; 
	
	var initExampleSeries = function () {
		var index = new DateIndex([new Date(1975, 24, 2), new Date(1975, 24, 2)]);
		var valuesFn = function () {
			return [100, 200];
		};
		return new LazySeries(index, valuesFn);		
	};
	
	/* Can't really do this check, it will break lazy evaluation.
	it('throws exception when index and values arrays do not have equal length', function () {
		
		expect(function () {
			var index = [new Date(1975, 24, 2)];
			var values = [100, 200];
			new Series(index, values);			
		}).to.throw();

		expect(function () {
			var index = [new Date(1975, 24, 2), new Date(1975, 24, 2)];
			var values = [100];
			new Series(index, values);			
		}).to.throw();
	});
	*/
	
	it('can get series index', function () {
		
		var series = initExampleSeries();		
		expect(series.index().values()).to.eql([			
			new Date(1975, 24, 2),
			new Date(1975, 24, 2)			
		]);		
	});
	
	it('can get series values', function () {
		
		var series = initExampleSeries();		
		expect(series.values()).to.eql([			
			100,
			200			
		]);		
	});
});