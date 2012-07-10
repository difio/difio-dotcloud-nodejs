#!/usr/bin/env node
/*************************************************************************************
*
* Copyright (c) 2012, Svetlozar Argirov <zarrro [AT] gmail.com>
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*
*************************************************************************************/

var fs = require('fs');

var env = {};

try {
 env = JSON.parse(fs.readFileSync('/home/dotcloud/environment.json', 'utf-8'));
} catch (e) {
}

module.exports = require("common-nodejs-difio").configure({
	  'user_id' : env['DIFIO_USER_ID'] || process.env['DIFIO_USER_ID'],
	  'app_name' : env['DOTCLOUD_PROJECT'] + '.' + env['DOTCLOUD_SERVICE_NAME'],
	  'app_uuid' : env['DIFIO_UUID'],
	  'app_type' : 'Node.js',
	  'app_url'  : env['DOTCLOUD_WWW_HTTP_URL'],
	  'app_vendor' : 1,
	  'pkg_type' : 2,
	  'url' : env['DIFIO_REGISTER_URL'] || process.env['DIFIO_REGISTER_URL'] ,
});


if(!module.parent){
	module.exports.cli();
}
