// ✅ Get Firebase Auth & Firestore
const auth = firebase.auth();
const db = firebase.firestore();

// ✅ Handle Register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return db.collection('users').doc(cred.user.uid).set({
          name: name,
          email: email,
          role: role
        });
      })
      .then(() => {
        alert('Registration successful!');
        window.location.href = 'login.html';
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// ✅ Handle Login — using loginEmail & loginPassword IDs
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}                  