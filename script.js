//Alege un numar aleatoriu intre 1 si 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

//Adaugare event-listener la butonul "ghiceste"
const button = document.getElementById("guess-button");
button.addEventListener("click", function() {
// Obtine input-ul din campul input
    const guess = document.getElementById("guess-input").value;
// Verifica daca input-ul este corect, daca este mai mare sau daca este mai mic. Returneaza un mesaj pentru fiecare scenariu.
    if (guess == randomNumber) {
        document.getElementById("guess-message").innerHTML = "Bravo boss, ai ghicit ! Traiasca familia ta";
    } else if (guess > randomNumber) {
        document.getElementById("guess-message").innerHTML = "Prea mare numarul tete, mai scade" ;
    } else {
        document.getElementById("guess-message").innerHTML = "Mic frate.. mic. Baga ceva mai mare, echivalent cu brandul tau.. gen";
    }
});
