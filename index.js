'use strict';

let apiKey = 'PaFEjRCI9JZZ58QY0GAhZT3AfqI9O15As2kotcvb'

let url = 'https://developer.nps.gov/api/v1/parks?'


let states = [];


//console.log(states);





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
      //pString += `&stateCode=${states}`;
      let urlTrue = url + pString;
      fetch(urlTrue).then(function (req) {
        return req.json();
      }).then(function (json) {
        console.log(json);
        for (let i = 0; i < json.data.length & i < value; i++) {
          let name = json.data[i].fullName;
          let description = json.data[i].description;
          let link = json.data[i].url;
          $('ul.names').append(`<li><h1>${name}</h1><br>
      <p>${description}</p><br><p><a href='${link}'>Link</a></p>
      </li>`);


        }

      });

    }
  });
}




function main() {
  //console.log(`https://developer.nps.gov/api/v1/parks?stateCode=NY&api_key=${apiKey}`)

  getResults();
}

$(main)