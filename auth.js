function auth(login, pass) {
	if(login === 'login' && pass === 'pass') {	
		return login + pass; 
	} else {
		return 'youre password wrong';
        }
}
