const firebaseConfig = {
  apiKey: "AIzaSyBXE5Cp4foZxRPcAOlCSHfbKTFwIWdQSWE",
  authDomain: "user-login-form-a440d.firebaseapp.com",
  databaseURL: "https://user-login-form-a440d-default-rtdb.firebaseio.com",
  projectId: "user-login-form-a440d",
  storageBucket: "user-login-form-a440d.appspot.com",
  messagingSenderId: "536643428878",
  appId: "1:536643428878:web:b9527baf1828015b0a525f",
};
//for initializing database
firebase.initializeApp(firebaseConfig);
//reference your database
var userloginformDB = firebase.database().ref("userloginform")
document.getElementById('userloginform').addEventListener('submit' ,submitform)

function submitform(e) {
    e.preventDefault();

    var fullname = getElementVal('fullname');
    var email = getElementVal('email');
    var password = getElementVal('password');

    console.log(fullname, email, password);
}

const saveMessages = (fullname, email, password) 
{
    var newuserloginform = userloginformDB.push();


    newuserloginform.set({
        fullname: fullname,
        email: email,
        password: password,
    });
    saveMessages(fullname,email,password);


};
const getElementVal = (id) 
{
    return document.getElementById(id).value
};

