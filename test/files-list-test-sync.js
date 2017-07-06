const chai = require('chai');
const expect = chai.expect;
const path = require('path');
const mock = require('mock-fs');

const crawler = require('../index.js');
const testdata = require('../data/demo/testdata.js');
const testdirs = require('../data/demo/testdirs.js');

const sep = path.sep;
const testDir1 = 'data' + sep + 'folder' + sep + 'folder1';
const testDir2 = 'data' + sep + 'folder' + sep + 'folder2';
const testDir3 = 'data' + sep + 'folder' + sep + 'folder3';
const testDir4 = 'data' + sep + 'folder' + sep + 'folder4';
const testDir5 = 'data' + sep + 'folder' + sep + 'folder5';
const testDir6 = 'data' + sep + 'folder' + sep + 'folder6';

describe('Get files and directories count synchronously', function () {
	beforeEach(function() {
		mock(testdirs);
	});

	afterEach(mock.restore);

	it('Check number of files and directories in folder1', function () {
		var list = crawler.getFilesListSync(testDir1);
		expect(list.dirnames.length).equal(16);
		expect(list.filenames.length).equal(27);
	});

	it('Check number of files and directories in folder2', function () {
		var list = crawler.getFilesListSync(testDir2);
		expect(list.dirnames.length).equal(0);
		expect(list.filenames.length).equal(0);
	});

	it('Check number of files and directories in folder3', function () {
		var list = crawler.getFilesListSync(testDir3);
		expect(list.dirnames.length).equal(0);
		expect(list.filenames.length).equal(1);
	});

	it('Check number of files and directories in folder4', function () {
		var list = crawler.getFilesListSync(testDir4);
		expect(list.dirnames.length).equal(1);
		expect(list.filenames.length).equal(1);
	});

	it('Check number of files and directories in folder5', function () {
		var list = crawler.getFilesListSync(testDir5);
		expect(list.dirnames.length).equal(2);
		expect(list.filenames.length).equal(9);
	});

	it('Check number of files and directories in folder6', function () {
		var list = crawler.getFilesListSync(testDir6);
		expect(list.dirnames.length).equal(1);
		expect(list.filenames.length).equal(0);
	});
});

describe('Get files and directories list items synchronously', function () {
	beforeEach(function() {
		mock(testdirs);
	});

	afterEach(mock.restore);

	it('Should compare directories and files list in folder1', function () {
		var list = crawler.getFilesListSync(testDir1);
		expect(list.dirnames).deep.equal(testdata.folder1.dirnames);
		expect(list.filenames).deep.equal(testdata.folder1.filenames);
	});

	it('Should compare directories and files list in folder2', function () {
		var list = crawler.getFilesListSync(testDir2);
		expect(list.dirnames).deep.equal([]);
		expect(list.filenames).deep.equal([]);
	});

	it('Should compare directories and files list in folder3', function () {
		var list = crawler.getFilesListSync(testDir3);
		expect(list.dirnames).deep.equal([]);
		expect(list.filenames).deep.equal(testdata.folder3.filenames);
	});

	it('Should compare directories and files list in folder4', function () {
		var list = crawler.getFilesListSync(testDir4);
		expect(list.dirnames).deep.equal(testdata.folder4.dirnames);
		expect(list.filenames).deep.equal(testdata.folder4.filenames);
	});

	it('Should compare directories and files list in folder5', function () {
		var list = crawler.getFilesListSync(testDir5);
		expect(list.dirnames).deep.equal(testdata.folder5.dirnames);
		expect(list.filenames).deep.equal(testdata.folder5.filenames);
	});

	it('Should compare directories and files list in folder6', function () {
		var list = crawler.getFilesListSync(testDir6);
		expect(list.dirnames).deep.equal(testdata.folder6.dirnames);
		expect(list.filenames).deep.equal(testdata.folder6.filenames);
	});
});
