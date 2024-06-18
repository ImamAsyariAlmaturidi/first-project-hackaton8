const user = [
    {
      role: "admin",
      username: "admin",
      password: "admin12345",
    },
  ];
  
const submitForm = (event, database) => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    
    const user = database.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      alert(`Welcome ${user.username}`);
      window.location.href = "dashboard.html";
    } else {
      alert("invalid credentials, please invalid username or password");
    }
    };
    
    form.addEventListener("submit", (e) => {
    submitForm(e, user);
    });
    