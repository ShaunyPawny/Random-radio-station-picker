
    // crfeate an array of radio stations that we would like to have generated

const radStations = [
    'Metro Radio', 
    'Sun FM', 
    'BBC Radio Two', 
    'Capital', 
    'Smooth Radio'
    
];

    // create a function for generating random number and times it by 'radStations' .length

function carSelector() {
    let randomRadio = Math.floor(Math.random() * radStations.length);
    // output the value into the 'results box' 
    document.getElementById('resultBox').innerHTML = radStations[randomRadio];
}