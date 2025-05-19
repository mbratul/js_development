/* 
    The DOM (Document Object Model) in JavaScript is a programming interface for web documents. It represents the HTML structure of a webpage as a tree of objects that JavaScript can interact with.

    Why is DOM Required?

    The DOM is essential because

    Dynamic Content Updates: Without reloading the page, the DOM allows content updates (e.g., form validation, AJAX responses).
    User Interaction: It makes your webpage interactive (e.g., responding to button clicks, form submissions).
    Flexibility: Developers can add, modify, or remove elements and styles in real-time.
    Cross-Platform Compatibility: It provides a standard way for scripts to interact with web documents, ensuring browser compatibility.

    url: https://www.geeksforgeeks.org/dom-document-object-model/
    github: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/21_Day_DOM/21_day_dom.md
 */
/* console.log("hello world");
let para = document.querySelector("p");
let link = document.querySelector("a");
console.log(para.textContent);
console.log(link.textContent);
para.textContent = "hello jupiter";
para.style.color = "#af1212";
link.style.color = "#444444"; */

/* =======DOM Selection Preferred Way============ */
let mainTitle = document.getElementsByTagName("h1");
console.log(mainTitle);
for (let i = 0; i < mainTitle.length; i++) {
  mainTitle[i].style.color = "red";
}

let subtitle = document.getElementById("subtitle");
console.log(subtitle);
subtitle.style.color = "green";
