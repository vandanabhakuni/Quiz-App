
const quizData = {
  html: [
    { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"], answer: 2 },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], answer: 0 },
    { question: "Which attribute is used to provide a unique name to an HTML element?", options: ["class", "id", "name", "style"], answer: 1 },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<br>", "<lb>", "<b>"], answer: 1 },
    { question: "Which tag is used to create a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<hyper>"], answer: 1 },
    { question: "Which HTML attribute specifies an alternate text for an image?", options: ["alt", "title", "src", "longdesc"], answer: 0 },
    { question: "What is the correct HTML element for the largest heading?", options: ["<head>", "<h6>", "<h1>", "<heading>"], answer: 2 },
    { question: "Which doctype is correct for HTML5?", options: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<DOCTYPE html>", "<!html>"], answer: 0 },
    { question: "Which HTML tag is used to define a table row?", options: ["<td>", "<row>", "<th>", "<tr>"], answer: 3 },
    { question: "How can you open a link in a new tab in HTML?", options: ["target='_self'", "target='_blank'", "new='tab'", "href='newtab'"], answer: 1 }
  ],
  css: [
    { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], answer: 2 },
    { question: "Which HTML attribute is used to define inline styles?", options: ["styles", "style", "class", "font"], answer: 1 },
    { question: "What is the correct CSS syntax to change the background color of an element?", options: ["body:color=blue;", "body {background-color: blue;}", "{body:background-color=blue;}", "body = background-color: blue;"], answer: 1 },
    { question: "Which property is used to change the font of an element?", options: ["font-family", "font-style", "font-weight", "text-style"], answer: 0 },
    { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: 2 },
    { question: "How do you make a list not display bullet points?", options: ["list-style: none;", "bullet: none;", "text-decoration: none;", "list: no-bullets;"], answer: 0 },
    { question: "Which property is used to change the left margin of an element?", options: ["margin-left", "padding-left", "indent", "spacing-left"], answer: 0 },
    { question: "What does the 'position: absolute' property do?", options: ["Sets the element relative to its normal position", "Sets the element at a specific position relative to the nearest positioned ancestor", "Fixes the element to the top", "Aligns the element to the left corner"], answer: 1 },
    { question: "Which CSS property is used to make text bold?", options: ["font-weight", "font-style", "text-bold", "text-style"], answer: 0 },
    { question: "Which unit is NOT relative in CSS?", options: ["em", "rem", "%", "px"], answer: 3 }
  ],
  js: [
    { question: "Which company developed JavaScript?", options: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"], answer: 1 },
    { question: "Inside which HTML element do we put the JavaScript?", options: ["<js>", "<scripting>", "<javascript>", "<script>"], answer: 3 },
    { question: "How do you write 'Hello World' in an alert box?", options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"], answer: 3 },
    { question: "How do you create a function in JavaScript?", options: ["function:myFunction()", "function myFunction()", "function = myFunction()", "create myFunction()"], answer: 1 },
    { question: "How can you add a comment in JavaScript?", options: ["<!--This is a comment-->", "// This is a comment", "** This is a comment **", "## This is a comment"], answer: 1 },
    { question: "Which operator is used to assign a value to a variable?", options: ["*", "=", "-", "+"], answer: 1 },
    { question: "How do you declare a JavaScript variable?", options: ["var carName;", "variable carName;", "v carName;", "carName = var;"], answer: 0 },
    { question: "What will 'typeof []' return?", options: ["array", "object", "list", "undefined"], answer: 1 },
    { question: "Which method converts JSON data to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: 0 },
    { question: "What is the correct way to write a JavaScript array?", options: ["var colors = (1:'red', 2:'blue')", "var colors = ['red', 'blue']", "var colors = 'red', 'blue'", "var colors = {'red', 'blue'}"], answer: 1 }
  ],
  accessibility: [
    { question: "What does 'ARIA' stand for in web accessibility?", options: ["Accessible Rich Internet Applications", "Automatic Reader Interface Application", "Advanced Responsive Internet Accessibility", "Assistive Readability Integration Application"], answer: 0 },
    { question: "Which attribute is used to describe images to screen readers?", options: ["alt", "title", "src", "desc"], answer: 0 },
    { question: "What does a screen reader do?", options: ["Displays images", "Reads text aloud", "Zooms the page", "Records audio"], answer: 1 },
    { question: "What is the recommended contrast ratio for normal text?", options: ["3:1", "4.5:1", "2:1", "1.5:1"], answer: 1 },
    { question: "Which tag helps in defining the main content of a page?", options: ["<header>", "<main>", "<section>", "<footer>"], answer: 1 },
    { question: "What does the 'tabindex' attribute do?", options: ["Sets the font size", "Defines tab order", "Adds a tab character", "Scrolls the page"], answer: 1 },
    { question: "What is semantic HTML?", options: ["HTML with semantic tags", "HTML with CSS", "HTML without tags", "HTML with no attributes"], answer: 0 },
    { question: "Which element is best for navigation menus?", options: ["<div>", "<span>", "<nav>", "<section>"], answer: 2 },
    { question: "Why use labels with form inputs?", options: ["To change color", "For screen reader users", "To reduce input size", "To add spacing"], answer: 1 },
    { question: "Which of these is a screen reader?", options: ["JAWB", "JAWS", "SCROLL", "CLICK"], answer: 1 }
  ]
};
