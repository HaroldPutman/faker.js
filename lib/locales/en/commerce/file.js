var filename = {
  "name_format": [
    "{{commerce.fileModifier}} {{commerce.fileDocument}}.{{commerce.fileExtension}}",
    "{{commerce.fileModifier}} {{commerce.fileDocument}}({{random.number}}).{{commerce.fileExtension}}",
    "{{name.lastName}} {{commerce.fileModifier}} {{commerce.fileDocument}}.{{commerce.fileExtension}}",
    "{{random.number}} {{commerce.fileModifier}} {{commerce.fileDocument}}.{{commerce.fileExtension}}",
    "{{commerce.fileDocument}}.{{commerce.fileExtension}}"
  ]
};

module["exports"] = filename;
filename.extension = require('./file_extension');
filename.document = require('./file_document');
filename.modifier = require('./file_modifier');
