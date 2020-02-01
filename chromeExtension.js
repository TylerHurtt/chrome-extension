// We need to grab all the info from the radio buttons
  // The checked property should alert us to the values that we need
    // The value from the first set of radio buttons should give us the size to query
    // The value from the second should give us the genre key for the api
      // The values are already stored inside the 'value' property of the inputs
  // Fetch the appropriate api data by querying the api with the appropriate keywords and values applied
  // Create html elements to store the data approriately
  // Load the data to the result page

  const myForm = document.getElementById('dataForm');

  myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event)
  })


const submitButton = document.getElementById('submit_button')

  submitButton.addEventListener('click', () => {
    console.log('I want to be clicked!')
  })

inputArea = document.getElementsByTagName('input')
const inputArray = Array.from(inputArea)
console.log(inputArray)

let trueArray = []
submitButton.addEventListener('click', ()=> {
  // console.log('inputArray is ',inputArray)
  inputArray.forEach((curr) => {
    // console.log('curr is ', curr)
    if(curr.checked === true){
      // console.log('checked is true')
      // console.log(curr.value)
      trueArray.push(curr.value)
    }
    else if(curr.checked === false){
      // console.log('checked is false')
    } else{
      // console.log('checked is something weird')
    }

  })
  const size = trueArray[0].toString();
  const genreId = trueArray[1].toString();

  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&genreId=${genreId}&size=${size}&apikey=6o9zA4xxbF9Sop65ybfO7DCaeqDG6xYj`, {
    Headers: "application/x-www-form-urlencoded"
  })  
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    const feed = document.createElement('div')
    const body = document.querySelector('body');
    const container = document.getElementById('container')
    container.remove()
    console.log('feed', feed)
    body.appendChild(feed)
    console.log('body', body)
    const eventArray = myJson._embedded.events
    for(let event of eventArray){
      addToPage(event.name, feed)
    }

  });
})

function addToPage(name, parent) {
  const div = document.createElement('div')
  div.setAttribute('class', 'band')
  const text = document.createTextNode(name)
  div.appendChild(text)
  parent.appendChild(div)
}

// inputArea.forEach((curr) => {
//   let inputObj = curr;

//   console.log('hello', curr.attributes)

  // if(curr.checked === true){
  //   console.log('checked is true')
  //   console.log(curr)
  // }
  // else if(curr.checked === false){
  //   console.log('checked is false')
  // } else{
  //   console.log('checked is something weird')
  // }
// })

// const numAndGenre = inputArea.reduce((acc, curr) => {
//   curr.checked === true;
//   acc.push(curr.value)
//   return acc;
// },[])

// console.log(numAndGenre);
