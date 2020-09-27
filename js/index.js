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