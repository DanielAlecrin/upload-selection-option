"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
console.log('aaa');
var options = [];
for (var i = 0; i <= 800; i++) {
    var option = {
        label: 'Op' + i,
        nextItem: null,
        pontuation: null,
        type: 'STANDARD'
    };
    options.push(option);
}
var rule = {
    allowPontuation: false,
    required: false,
    selection: {
        min: null,
        max: null
    },
    media: {
        min: null,
        max: null
    },
    withoutObservation: true,
    localizationRestriction: {
        type: 'NONE'
    }
};
var items = [
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    },
    {
        helpPhrase: 'frase de apoio',
        renderType: 'RADIO',
        statement: 'Possui algum defeito?',
        totalPontuation: null,
        options: options,
        rule: rule
    }
];
var categories = [
    {
        description: 'teste',
        name: 'Padrão',
        localities: [],
        items: items
    }
];
var obj = {
    categories: categories
};
console.log(obj.categories[0].items[0].options.length);
(0, node_fetch_1.default)('https://supply.logistica.staging.totvs.app/checklist/core/api/v1/scripts/bce55718-0f5b-4823-bc2a-9510ab4ae2a5/categories/stepByStep', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
        'Content-type': "application/json; charset=UTF-8",
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjJiYjZmYzUyM2ZjNzQwZjI4NmMxOTZmY2ExMzUyNzE2IiwidHlwIjoiSldUIn0.eyJuYmYiOjE2ODQzNTM4NzcsImV4cCI6MTY4NDM1NzQ3NywiaXNzIjoiaHR0cHM6Ly9zdXBwbHkucmFjLnN0YWdpbmcudG90dnMuYXBwL3RvdHZzLnJhYyIsImF1ZCI6ImF1dGhvcml6YXRpb25fYXBpIiwiY2xpZW50X2lkIjoibWV1X2NoZWNrbGlzdCIsInN1YiI6IjI0MDY0IiwiYXV0aF90aW1lIjoxNjg0MjM3ODkxLCJpZHAiOiJsb2NhbCIsImh0dHA6Ly93d3cudG5mLmNvbS9pZGVudGl0eS9jbGFpbXMvcHJvZHVjdElkIjoiOSIsImh0dHA6Ly93d3cudG5mLmNvbS9pZGVudGl0eS9jbGFpbXMvcHJvZHVjdE5hbWUiOiJNZXUgQ2hlY2tsaXN0IiwiaHR0cDovL3d3dy50bmYuY29tL2lkZW50aXR5L2NsYWltcy9yYWNWZXJzaW9uIjoiMS4yOS4zMi4wIiwiaHR0cDovL3d3dy50bmYuY29tL2lkZW50aXR5L2NsYWltcy9wcm9kdWN0Um9sZSI6WyJQTEFORUpBRE9SIiwiRVhFQ1VUT1IiLCJHRVNUT1IiLCJBVkFMSUFET1IiLCJBZG1pbiIsIkdFU1RPUl9ERV9DSEVDS0xJU1QiLCJQTEFORUpBRE9SX0RFX0NIRUNLTElTVCJdLCJyb2xlIjpbIlNVUFBMWS1BQ0NFU1MtTUFOQUdFUiIsIkFkbWluIl0sImh0dHA6Ly93d3cudG5mLmNvbS9pZGVudGl0eS9jbGFpbXMvY3VzdG9tUm9sZSI6IkFkbWluIiwiaHR0cDovL3d3dy50bmYuY29tL2lkZW50aXR5L2NsYWltcy90ZW5hbnRJZCI6IjcxZThmMTYwLWQ5ZDQtNGEyZC04NzA3LTc4MTQ0M2FjNzI2YyIsImh0dHA6Ly93d3cudG5mLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50TmFtZSI6InN1cHBseSIsImh0dHA6Ly93d3cudG5mLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50RnVsbE5hbWUiOiJTdXBwbHkiLCJodHRwOi8vd3d3LnRuZi5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkTGVnYWN5IjoiMTE2IiwiaHR0cDovL3d3dy50bmYuY29tL2lkZW50aXR5L2NsYWltcy91c2VyRnVsbG5hbWUiOiJEYW5pZWwgIEFsZWNyaW4iLCJuYW1lIjpbImRhbmllbC5hbGVjcmluIiwiRGFuaWVsICBBbGVjcmluIl0sImVtYWlsIjoiZGFuaWVsLmFsZWNyaW5AdG90dnMuY29tLmJyIiwiaHR0cDovL3d3dy50bmYuY29tL2lkZW50aXR5L2NsYWltcy9vcmdhbml6YXRpb25zIjpbIjY3NSIsIjczNSIsIjc5NSJdLCJzaWQiOiIwRDBBMzg3MzY0QjU0MDczNDg0MzBFMTg0MEVFOUNDQyIsImlhdCI6MTY4NDM1Mzg3Nywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwiYXV0aG9yaXphdGlvbl9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.HpygQgnWXTl-Tj7evOE0R40LZv28SvZChyp75ZdLlQstdAi_ORROOkJ5N_UR1FbXDH5Sah0MpzWd1iZVC_O81BIU5M71-EAAwLrRhP-Xv2LdHvLmt1OOcesjzkGi9YJMzgmGHIlTPabTgvKTpg-Pz6JZsZrdP1hjSFbEAOLXdG_aRncSfwF_uk-6QnunjcO5EQ3Ud_H1MyWxnRmQJ0RpMEMBJXIsv1sFBDjJykgPrIN9ddUM3BonxpyovnB7GzqRDR4egqSeUJGt6aaG55G02EwR1bvNnxu3PrglO4LnFliIjnDoPEJjNwKFNcvbXH5tetS63vo6RuDwtxWQbbisdA'
    }
}).then(function (response) {
    console.log('ress', response);
});
