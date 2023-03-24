
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
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/html");
const listNode = xmlDOM.querySelector("list");
const studentNode = [...listNode.querySelectorAll("student")];

const list = [];
    studentNode.forEach(studentNode => {
        const nameNode = studentNode.querySelector("name");
        const langAttr = nameNode.getAttribute("lang");
        const firstNode = studentNode.querySelector("first");
        const secondNode = studentNode.querySelector("second");
        const ageNode = studentNode.querySelector("age");
        const profNode = studentNode.querySelector("prof");

        list.push({
            name: firstNode.textContent+ ' ' +secondNode.textContent +
            ' age: ' +ageNode.textContent+
            ', prof: ' +profNode.textContent+
            ', lang: ' +langAttr
        });
});
const result = {
    list: list 
}
console.log('result', result);
