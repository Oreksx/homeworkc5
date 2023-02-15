const jsdom = require("jsdom");

const { JSDOM } = jsdom;

global.DOMParser = new JSDOM().window.DOMParser;

const parser = new DOMParser();

const xmlString = `
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>`;

const xmlDom = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDom.querySelectorAll("student");

let result = [];

studentNode.forEach((item) => {
    const name = item.querySelector("name");
    const first = name.querySelector("first");
    const second = name.querySelector("second");
    const age = item.querySelector("age");
    const prof = item.querySelector("prof");
    const lang = name.getAttribute("lang");

    result.push({
        name: first.textContent + " " + second.textContent,
        age: age.textContent,
        prof: prof.textContent,
        lang: lang
    });
});


console.log(result);
