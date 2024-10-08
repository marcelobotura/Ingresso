function autoCalculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    if (birthdate) {
        const birthdateObj = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthdateObj.getFullYear();
        const monthDiff = today.getMonth() - birthdateObj.getMonth();
        const dayDiff = today.getDate() - birthdateObj.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        document.getElementById("age").value = age;
        checkTicket();  // Chama a função para exibir automaticamente o resultado
    }
    toggleResetButton();
}

function autoCalculateBirthdate() {
    const ageInput = document.getElementById("age").value;
    if (ageInput) {
        const today = new Date();
        const birthYear = today.getFullYear() - ageInput;
        const birthdate = new Date(birthYear, today.getMonth(), today.getDate());
        
        const formattedDate = birthdate.toISOString().split('T')[0];
        document.getElementById("birthdate").value = formattedDate;
        
        checkTicket();  // Chama a função para exibir automaticamente o resultado
    }
    toggleResetButton();
}

function checkTicket() {
    const birthdate = document.getElementById("birthdate").value;
    const ageInput = document.getElementById("age").value;
    let age;

    if (birthdate) {
        const birthdateObj = new Date(birthdate);
        const today = new Date();
        age = today.getFullYear() - birthdateObj.getFullYear();
        const monthDiff = today.getMonth() - birthdateObj.getMonth();
        const dayDiff = today.getDate() - birthdateObj.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
    } else if (ageInput) {
        age = parseInt(ageInput);
    } else {
        alert("Por favor, insira a data de nascimento ou a idade.");
        return;
    }

    const result = document.getElementById("result");
    result.innerHTML = "";

    // Categorias e condições
    if (age <= 6) {
        result.innerHTML += "<p><strong>Criança:</strong> Não paga ingresso (até 6 anos).</p>";
    } else if (age === 7) {
        result.innerHTML += "<p><strong>Criança:</strong> Paga ingresso inteiro (7 anos completos).</p>";
    }

    if (age < 18) {
        result.innerHTML += "<p><strong>Morador:</strong> Comprovante dos pais necessário (até 17 anos).</p>";
    } else if (age >= 18 && age < 60) {
        result.innerHTML += "<p><strong>Morador:</strong> Comprovante pessoal necessário (dos 18 aos 59 anos).</p>";
    } else if (age >= 60) {
        result.innerHTML += "<p><strong>Idoso:</strong> Comprovante dos filhos pode ser utilizado (60 anos completos).</p>";
    }
}

function resetForm() {
    document.getElementById("ticketForm").reset();
    document.getElementById("result").innerHTML = "";
    document.getElementById("resetButton").style.display = "none";
}

function toggleResetButton() {
    const birthdate = document.getElementById("birthdate").value;
    const ageInput = document.getElementById("age").value;
    const resetButton = document.getElementById("resetButton");

    if (birthdate || ageInput) {
        resetButton.style.display = "inline-block";
    } else {
        resetButton.style.display = "none";
    }
}
