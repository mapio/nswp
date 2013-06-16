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

var form;

function onload() {
	form = document.forms.options;
	form.secret.value = localStorage.getItem( "secret" );
	if (  localStorage.getItem( "onepass" ) == "true" ) form.onepass.checked = true;
}

function set() {
	localStorage.setItem( "secret", form.secret.value );
	localStorage.setItem( "onepass", form.onepass.checked );
}

document.addEventListener( 'DOMContentLoaded', function () {
	onload();
	document.getElementById( 'secret' ).addEventListener( 'change', set );
	document.getElementById( 'onepass' ).addEventListener( 'change', set );
} );
