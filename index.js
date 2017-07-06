const fs   = require('fs');
const path = require('path');
const filepath = require('./lib/FilePath.js');

var Crawler = require('./lib/Crawler.js');
var CrawlerSync = require('./lib/CrawlerSync.js');

/**
 * Gets list of files and folders using crawler object.
 */
function FilesList() {

}

/**
 * Get the list of files and folders asynchronously
 * including subfolder and files of the given directory.
 * @param {String} directory Name of the directory being crawled
 * @return {Array} list List of files and folders
 */
FilesList.prototype.getFilesList = function (dirname) {
    var self = this;
    var crawler  = new Crawler();
    dirname  = filepath.normalisePath(dirname);

    return new Promise(function(resolve, reject) {
        var isParentDir = true;
        crawler.crawl(dirname, isParentDir)
            .then(crawler.getData.bind(crawler, resolve))
            .catch(function(e) {
                console.error(e);
                reject();
            });
    });
};

/**
 * Get the list of files and folders synchronously
 * including subfolder and files of the given directory.
 * @param {String} directory Name of the directory being crawled
 * @return {Array} list List of files and folders
 */
FilesList.prototype.getFilesListSync = function (dirname) {
    var self = this;
    var crawler  = new CrawlerSync();
    dirname  = filepath.normalisePath(dirname);

    return crawler.getData(dirname);
};

var filesList = new FilesList();

module.exports = filesList;