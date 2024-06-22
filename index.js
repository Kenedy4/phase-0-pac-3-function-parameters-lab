function introduction(name = "Aki" /*secondName="Samip"*/) {
  return `Hi, my name is ${name}.`;
}
function introduction(name1 = "Samip" /*secondName="Samip"*/) {
  return `Hi, my name is ${name1}.`;
}

function introductionWithLanguage(name = "Aki", language = "Ember.js") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguage(name2 = "Samip", language = "Ember.js") {
  return `Hi, my name is ${name2} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introduction());
