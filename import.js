// Add import button and file input
$("header").outerHTML += '<div><input type="file" id="pwi"/><button class="cliccme">import</button></div>';
// Add listener for import
$('.cliccme').addEventListener('click', function(){pwim();acim();});

// Read file, create array with info
function pwim(){
if($('#pwi').files[0]){
mef = $('#pwi').files[0];

filer = new FileReader();
filer.onload = function(){pw = filer.result;pwa = pw.split('\n');pwa.shift();};
filer.readAsText(mef);
};
};

// import of entry
function addp(eurl,eus,eup){
// Click "Create New Login"
$("login-list")._createLoginButton.click();

// Set the three values
$("login-item")._originInput.value = eurl;
$("login-item")._usernameInput.value = eus;
$("login-item")._passwordInput.value = eup;

// Save the entry
$("login-item")._saveChangesButton.click();
};


function acim(){
// dumb check for existing array from file
if(typeof pwa != "undefined"){
// Parse the file
for(i=0;i<pwa.length;i++){
// Parse current entry
entry = pwa[i].split(",");
eurl = entry[0];
eus = entry[1];
eup = entry[2];
eex = entry[3];
ena = entry[4];
if(eex != ""){
	// Check for invalid entry length
	if(entry.length != 7){
			console.log(ena + ' has invalid data, add manually or fix in file \n entry: ' + entry);
	}else{
	// Notify if "extra" notes are in the entry from Lastpass
			console.log(ena + ' has extra data, please keep this safe!');
	};
};
// Call to import function
addp(eurl,eus,eup);
};
}else{
	setTimeout(function(){acim();},100)
};
};
