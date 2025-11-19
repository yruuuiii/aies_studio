
document.addEventListener("DOMContentLoaded", () => {
  /* Firebase設定 */
  const firebaseConfig = {
    apiKey: "AIzaSyB_cAAvAZAaRYUDKwfdLuUHVeLyBWJBkTM",
    authDomain: "aies-studio.firebaseapp.com",
    projectId: "aies-studio",
    storageBucket: "aies-studio.appspot.com",
    messagingSenderId: "270144159532",
    appId: "1:270144159532:web:eea02553eba4eb07853689",
    measurementId: "G-XPSQEE25JW",
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  /* Googleログイン */
  document.getElementById("googleLogin").onclick = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    window.location.href = "mypage.html";
  };

  /* Appleログイン */
  document.getElementById("appleLogin").onclick = async () => {
    const provider = new firebase.auth.OAuthProvider("apple.com");
    await auth.signInWithPopup(provider);
    window.location.href = "mypage.html";
  };

  /* ゲストログイン */
  document.getElementById("guestLogin").onclick = async () => {
    await auth.signInAnonymously();
    window.location.href = "mypage.html";
  };
});
