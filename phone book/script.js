function addContact() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    if (name && phone) {
        var contactList = document.getElementById("contactList");
        var listItem = document.createElement("li");
        listItem.innerHTML=  name + " : " + phone;
        contactList.appendChild(listItem);
        document.getElementById("contactForm").reset();


    } else{
        alert("Plase Enter name and phone number.");
    }
}
