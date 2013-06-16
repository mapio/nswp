/*
 Copyright 2011, Massimo Santini <santini@dsi.unimi.it>

 This file is part of "Not So Weak Passwords".

 "Not So Weak Passwords" is free software: you can redistribute it and/or modify it
 under the terms of the GNU General Public License as published by the Free
 Software Foundation, either version 3 of the License, or (at your option) any
 later version.

 "Not So Weak Passwords" is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 details.

 You should have received a copy of the GNU General Public License along with
 "Not So Weak Passwords". If not, see <http://www.gnu.org/licenses/>.
*/

var form, secret, passes;

function onload() {
	form = document.forms.password;
	secret = localStorage.getItem( "secret" );
	passes = localStorage.getItem( "onepass" ) == "true" ? 1 : 10;
	if ( ! secret ) {
		alert( "Please set your secret in extension's options" );
	}
	chrome.tabs.getSelected( null, function( tab ) {
		form.url.value = tab.url.replace( /https?:\/\/(www.)?([^\/]*)(\/.*)?/, '$2' );
		generate();
	} );
}

function generate() {
	password = form.url.value;
	for ( i = 0; i < passes; i++ ) password = Sha1.hash( secret + password  );
	form.password.value = password.substring( 1, 16 );
	copy();
	form.url.select();
}

function copy() {
	form.password.select();
	document.execCommand( "Copy" );
}

document.addEventListener( 'DOMContentLoaded', function () {
	onload();
	document.getElementById( 'url' ).addEventListener( 'change', generate );
	document.getElementById( 'password' ).addEventListener( 'click', copy );
} );
