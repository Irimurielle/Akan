var myGender = function gender() {
    for (var gender of genders) {
        if (gender.checked) {
            return gender.value;
        }
    }
}
var month = function() {
    if (MM <= 0 || MM > 12) {
        return alert("Enter a valid month");
    }
}
var day = function() {
    if (DD <= 0 || DD > 31) {
        return alert("Enter a valid day");
    }
}
var dayOfWeek = Math.floor(((((YY.slice(0, 2)) / 4) - 2 * (YY.slice(0, 2)) - 1) + ((5 * (YY.slice(2, 4)) / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];