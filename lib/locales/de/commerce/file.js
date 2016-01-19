var filename = {
  "name_format": [
    "{{commerce.fileModifier}} {{commerce.fileDocument}}.{{commerce.fileExtension}}",
    "{{commerce.fileModifier}} {{commerce.fileDocument}}({{random.number}}).{{commerce.fileExtension}}",
    "{{name.lastName}} {{commerce.fileModifier}} {{commerce.fileDocument}}.{{commerce.fileExtension}}",
    "{{random.number}} {{commerce.fileModifier}} {{commerce.fileDocument}}.{{commerce.fileExtension}}",
    "{{commerce.fileDocument}}.{{commerce.fileExtension}}"
  ],
  "extension": [
    "pdf",
    "docx",
    "doc",
    "pptx",
    "ppt",
    "xlsx",
    "xls",
    "ods",
    "odp",
    "odt",
    "jpg",
    "png",
    "gif",
    "mp4",
    "mp3",
    "wmv",
    "m4v",
    "txt",
    "log",
    "csv",
    "xml",
    "psd",
    "ai",
    "dwg",
    "dxf",
    "zip",
    "gz"
  ]
};

module["exports"] = filename;
filename.document = require('./file_document');
filename.modifier = require('./file_modifier');
