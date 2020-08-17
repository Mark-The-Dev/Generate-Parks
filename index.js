'use strict';

let apiKey = 'PaFEjRCI9JZZ58QY0GAhZT3AfqI9O15As2kotcvb'

let url = 'https://developer.nps.gov/api/v1/parks?'


let states = [];


//console.log(states);

function getStuff(url, value) {
  fetch(url).then(function (req) {
    return req.json();
  }).then(function (json) {
    console.log(json);
    renderList(json.data, value);
  });
}

function renderList(json, value) {
  for (let i = 0; i < json.length & i < value; i++) {
    let name = json[i].fullName;
    let description = json[i].description;
    let link = json[i].url;
    $('ul.names').append(`<li><h1>${name}</h1><br>
<p>${description}</p><br><p><a href='${link}'>Link</a></p>
</li>`);

  }
}


function getResults() {
  $('main').on('click', '.get-parks', function (event) {
    event.preventDefault();
    let value = $(`.number`).val();
    let state = $(`.which-states`).val();

    if (state.length > 2 && !state.includes(',') && state.includes(' ')) {
      alert('USE THE FORMAT NY,NJ')
    } else {
      let params = {
        stateCode: state,
        api_key: apiKey
      };

      let pString = $.param(params);
      let urlTrue = url + pString;

      getStuff(urlTrue, value)

    } //end else
  });
}




function main() {
  //console.log(`https://developer.nps.gov/api/v1/parks?stateCode=NY&api_key=${apiKey}`)

  getResults();
}

$(main)