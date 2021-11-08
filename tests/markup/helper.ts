function format(html) {
  var tab = "\t";
  var result = "";
  var indent= "";

  html.split(/>\s*</).forEach(function(element) {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }

    result += indent + "<" + element + ">\r\n";

    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
      indent += tab;
    }
  });

  return result.substring(1, result.length-3);
}

function sortAttributes(elements) {
  for (var j = 0; j < elements.length; j++) {
    var attributes = [];
    for (var i = 0; i < elements[j].attributes.length; i++) {
      attributes.push({
        "name": elements[j].attributes[i].name,
        "value": elements[j].attributes[i].value
      });
    }

    var sortedAttributes = attributes.sort(
      (a1, b1) =>{
        let a = a1.name.toUpperCase();
        let b = b1.name.toUpperCase();
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      }
    );

    for (var i = 0; i < sortedAttributes.length; i++) {
      elements[j].removeAttribute(sortedAttributes[i]["name"]);
    }

    for (var i = 0; i < sortedAttributes.length; i++) {
      elements[j].setAttribute(sortedAttributes[i]["name"], sortedAttributes[i]["value"]);
    }
  }
}

export function testQuestionMarkup(assert, json, platform, etalon) {
  var id = "surveyElement"+platform.name;
  var surveyElement = document.getElementById(id);
  if(surveyElement) {
    surveyElement.innerHTML = "";
  }
  else {
    surveyElement = document.createElement("div");
    surveyElement.id = id;
    document.body.appendChild(surveyElement);
  }
  var done = assert.async();
  platform.survey = platform.surveyFactory(json);
  platform.survey["onAfterRenderQuestion"].add(function(survey, options) {
    var all = options.htmlElement.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
      all[i].removeAttribute("data-bind");
      all[i].removeAttribute("data-key");
      all[i].removeAttribute("data-rendered");
      all[i].removeAttribute("fragment");
      all[i].removeAttribute("id");
    }
    sortAttributes(all);
    var str = options.htmlElement.children[0].innerHTML;

    var re = /(<!--.*?-->)/g;
    var newstr = str.replace(re, "");
    newstr = newstr.replace(/(\r\n|\n|\r)/gm, "");
    newstr = newstr.replace(/(>  +<)/g, "><").trim();
    assert.equal(newstr, etalon,
      newstr == etalon?
        platform.name + " rendered correctly":
        platform.name + " rendered incorrectly"+"\n==================\n"+format(etalon)+"\n------------------\n"+format(newstr)+"\n==================\n");

    done();
  });
  platform.render(platform.survey, surveyElement);
}