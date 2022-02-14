var password = "haukai123";
function login() {
    if (document.getElementById('pass1').value != password){
        alert("wrong password");
        return false;
    }
    if (document.getElementById('pass1').value == password){
        alert('Click OK for Staff Details');
    }
}
