window.onload = function () {
    var firstPar = document.getElementById("firstParagraph"),
    secondPar = document.getElementById("secondParagraph");
    alert(firstPar.innerText); // will alert "Here is a paragraph."
    alert(secondPar.innerText); // will alert "Here is another paragraph. It contains some other tags, as well."
    alert(firstPar.innerHTML); // will alert "Here is a paragraph."
    alert(secondPar.innerHTML); // will alert "Here is another paragraph. It contains <span>some other tags,</span><a ref="http://www.google.com/">as well.</a>
    firstPar.innerText = "I have changed the text."; // will change the text of the first paragraph
    secondPar.innerText = "<ul><li>How do I love thee?</li><li>Let me count the ways!</li></ul>";
    // will change the HTML inside the second paragraph
}