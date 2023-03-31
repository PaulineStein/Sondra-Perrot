var topic_click = document.querySelectorAll('.topic_click');
var text_place = document.querySelectorAll('.text_place');
var wheel_img = document.querySelectorAll('.wheel_img');


topic_click.forEach(function (item, a) {
    item.addEventListener('click', function (e) {
        text_place.forEach(text_place_none => text_place_none.style.display = "none");
        text_place[a].style.display = "block";
        topic_click.forEach(text_place_none => text_place_none.classList.remove("bold"));
        item.classList.add("bold");

        wheel_img.forEach(wheel_img_none => wheel_img_none.style.display = "none");
        wheel_img[a].style.display = "inline-block";
    }, false);
});





// SMARTPHONE'S JS
var smartphone_text = document.querySelectorAll(".smartphone_text");
var smartphone_title = document.querySelectorAll(".smartphone_title");
var wheel_smartphone = document.querySelectorAll(".wheel-smartphone");

var wheel_smartphone_1 = document.querySelector("#wheel_smartphone_1");
var smartphone_title_1 = document.querySelector("#smartphone_title_1");
var smartphone_text_1 = document.querySelector("#smartphone_text_1");

var notContactSmartphone = document.querySelectorAll(".not-contact-smartphone");
var contact = document.querySelector(".contact");
var wheel_smartphone_7 = document.querySelector("#wheel_smartphone_7");
var smartphone_title_7 = document.querySelector("#smartphone_title_7");
var smartphone_text_7 = document.querySelector("#smartphone_text_7");

var notLegalTerms = document.querySelectorAll(".not-legal-terms");
var legal_terms = document.querySelector(".legal_terms");
var wheel_smartphone_8 = document.querySelector("#wheel_smartphone_8");
var smartphone_title_8 = document.querySelector("#smartphone_title_8");
var smartphone_text_8 = document.querySelector("#smartphone_text_8");


wheel_smartphone.forEach(function (item, a) {
    item.addEventListener('click', function () {
        if (a < 5) {
            smartphone_text.forEach(smartphone_text_none => smartphone_text_none.style.display = "none");
            smartphone_text[a + 1].style.display = "block";

            smartphone_title.forEach(smartphone_title_none => smartphone_title_none.style.display = "none");
            smartphone_title[a + 1].style.display = "block";

            wheel_smartphone.forEach(wheel_smartphone_none => wheel_smartphone_none.style.display = "none");
            wheel_smartphone[a + 1].style.display = "block";
        }
        if (a === 5) {
            wheel_smartphone.forEach(wheel_smartphone_none => wheel_smartphone_none.style.display = "none");
            smartphone_text.forEach(smartphone_text_none => smartphone_text_none.style.display = "none");
            smartphone_title.forEach(smartphone_title_none => smartphone_title_none.style.display = "none");
            wheel_smartphone[0].style.display = "block";
            smartphone_text[0].style.display = "block";
            smartphone_title[0].style.display = "block";
        }
    }, false);
});



contact.addEventListener('click', function () {
    notContactSmartphone.forEach(notContactSmartphone_none => notContactSmartphone_none.style.display = "none");

    smartphone_text_7.style.display = "block";
    smartphone_title_7.style.display = "block";

    wheel_smartphone.forEach(wheel_smartphone_none => wheel_smartphone_none.style.display = "none");
    wheel_smartphone_7.style.display = "block";
});


legal_terms.addEventListener('click', function () {
    notLegalTerms.forEach(notLegalTerms_none => notLegalTerms_none.style.display = "none");

    smartphone_text_8.style.display = "block";
    smartphone_title_8.style.display = "block";

    wheel_smartphone.forEach(wheel_smartphone_none => wheel_smartphone_none.style.display = "none");
    wheel_smartphone_8.style.display = "block";
});


wheel_smartphone_7.addEventListener('click', function () {
    smartphone_text_7.style.display = "none";
    smartphone_title_7.style.display = "none";
    wheel_smartphone_7.style.display = "none";

    smartphone_text_1.style.display = "block";
    smartphone_title_1.style.display = "block";
    wheel_smartphone_1.style.display = "block";

    contact.classList.remove("bold");
});


wheel_smartphone_8.addEventListener('click', function () {
    smartphone_text_8.style.display = "none";
    smartphone_title_8.style.display = "none";
    wheel_smartphone_8.style.display = "none";

    smartphone_text_1.style.display = "block";
    smartphone_title_1.style.display = "block";
    wheel_smartphone_1.style.display = "block";

    legal_terms.classList.remove("bold");
});