document.getElementById("startBtn").onclick = 
  () => {
    let q1 = prompt("Adınız nədir?");
    let q2 = prompt("Yaşınız neçədir?");
    let q3 = prompt("Sevdiyiniz rəng?");
    let q4 = prompt("Harada yaşayırsınız?");
    let q5 = prompt("Sevdiyiniz film?");
    let q6 = prompt("Sevdiyiniz yemək?");
    let q7 = prompt("Hobbiləriniz?");

    alert(
      "Cavablar:\n" +
      "1. Ad: " + q1 + "\n" +
      "2. Yaş: " + q2 + "\n" +
      "3. Rəng: " + q3 + "\n" +
      "4. Şəhər: " + q4 + "\n" +
      "5. Film: " + q5 + "\n" +
      "6. Yemək: " + q6 + "\n" +
      "7. Hobbilər: " + q7
    );
  };
