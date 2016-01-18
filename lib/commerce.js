var Commerce = function (faker) {
  var self = this;

  self.color = function() {
      return faker.random.arrayElement(faker.definitions.commerce.color);
  };

  self.department = function(max, fixedAmount) {
      return faker.random.arrayElement(faker.definitions.commerce.department);
  };

  self.productName = function() {
      return faker.commerce.productAdjective() + " " +
              faker.commerce.productMaterial() + " " +
              faker.commerce.product();
  };

  self.price = function(min, max, dec, symbol) {
      min = min || 0;
      max = max || 1000;
      dec = dec || 2;
      symbol = symbol || '';

      if(min < 0 || max < 0) {
          return symbol + 0.00;
      }

      var randValue = faker.random.number({ max: max, min: min });

      return symbol + (Math.round(randValue * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);
  };

  /*
  self.categories = function(num) {
      var categories = [];

      do {
          var category = faker.random.arrayElement(faker.definitions.commerce.department);
          if(categories.indexOf(category) === -1) {
              categories.push(category);
          }
      } while(categories.length < num);

      return categories;
  };

  */
  /*
  self.mergeCategories = function(categories) {
      var separator = faker.definitions.separator || " &";
      // TODO: find undefined here
      categories = categories || faker.definitions.commerce.categories;
      var commaSeparated = categories.slice(0, -1).join(', ');

      return [commaSeparated, categories[categories.length - 1]].join(separator + " ");
  };
  */

  self.productAdjective = function() {
      return faker.random.arrayElement(faker.definitions.commerce.product_name.adjective);
  };

  self.productMaterial = function() {
      return faker.random.arrayElement(faker.definitions.commerce.product_name.material);
  };

  self.product = function() {
      return faker.random.arrayElement(faker.definitions.commerce.product_name.product);
  };

  self.fileExtension = function() {
    return faker.random.arrayElement(faker.definitions.commerce.file.extension);
  };

  self.fileDocument = function() {
    return faker.random.arrayElement(faker.definitions.commerce.file.document);
  };

  self.fileModifier = function() {
    return faker.random.arrayElement(faker.definitions.commerce.file.modifier);
  };

  self.fileName = function(options) {
    options = options || {};
    var format = (typeof(options.format) === "string") ?
      options.format :
      faker.random.arrayElement(faker.definitions.commerce.file.name_format);
    var result = faker.fake(format);
    var namecase = (typeof(options.case) === "string") ?
      options.case :
      faker.random.arrayElement(['upper', 'camel', 'snake', 'train', 'spinal']);
    switch (namecase) {
      case 'upper':
        var parts = result.split('.');
        var extension = parts.pop();
        result = parts.join('.').toUpperCase() + '.' + extension;
        break;
      case 'camel':
        result = result.replace(/ /g,'');
        break;
      case 'snake':
        result = result.toLowerCase().replace(/ /g, '_');
        break;
      case 'train':
        result = result.replace(/ /g, '-');
        break;
      case 'spinal':
        result = result.toLowerCase().replace(/ /g, '-');
        break;
    }
    return result;
  };

  return self;
};

module['exports'] = Commerce;
