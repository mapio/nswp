var form;
function onload() {
		form = document.forms.password;
}
function set() {
		localStorage.setItem( "secret", form.secret.value );
		form.secret.type = 'password';
}
function get() {
		form.secret.value = localStorage.getItem( "secret" );
		form.secret.type = 'text';
}
function select() {
		form.password.focus();
		form.password.select();
}
function generate() {
		form.password.value = Sha1.hash( localStorage.getItem( "secret" ) + form.url.value ).substring( 1, 16 );
		select();
}

