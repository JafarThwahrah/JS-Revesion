// Ex1: Write a function that takes a number as input and returns true if the number is less than or equal to zero, otherwise return false.

function checkNum(number) {
  return number <= 0 ? "true" : "false";
}

console.log(checkNum(5));

// Ex2: Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)

function printNextInt(integer) {
  return (integer += 1);
}

console.log(printNextInt(2));

// Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers.

function checkArray(array) {
  const newArr = array.map(function (element) {
    return Number.isInteger(parseInt(element)) ? element : "";
  });

  return newArr;
}

console.log(checkArray(["123", "Jafar", "56", "Ahmad"]));

// Ex4: Develop a JS Code to check if a number is even or odd using recursion

const recursion = 3;

function oddEven(element) {
  return element % 2 == 0 ? "even" : "odd";
}

console.log(oddEven(recursion));

// Ex5: Write a function to swap all instances of string ch1 with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

function charSwap(string, ch1, ch2) {
  let arr = string.split("");
  let newArr = arr.map((element) => {
    return element == ch1
      ? (element = ch2)
      : element == ch2
      ? (element = ch1)
      : element;
  });

  let resultstr = newArr.join("");

  return resultstr;
}

console.log(charSwap("Jafar", "a", "f"));

// Ex6: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]

function namesS(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

namesS(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]);

// Ex7: Use forEach to  Return all the names in the previous array

["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"].forEach(
  (element) => {
    console.log(element);
  }
);

// Ex8: Project an array of series into an array of {id, title} pairs using forEach()
// Ex 9: Use map() now to implement the same previous functionality
// Ex 10: Use filter() to return the series with a rating under 5
function project() {
  let newSeries = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];

  //  forEach method

  //  newSeries.forEach(element =>{

  //     element.title = "film " + element.title;
  //     element.id = element.id+=5;

  //     console.log(element.id)
  //     console.log(element.title)

  //  })

  // map method

  // newSeries.map(element =>{
  //     element.title = "film " + element.title;
  //     element.id = element.id+=5;

  //     console.log(element.id)
  //     console.log(element.title)
  // })

  let filteredArr = newSeries.filter((element) => {
    return element.rating < 5;
  });

  console.log(filteredArr);
}

project();



// Ex 11: Use reduce()  function to return the longest string in an array of strings.

let arr = ["Java", "JavaScript", "Python", "C++", "PHP"]

const longest = arr.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);

console.log(longest);




// Ex 12: Create a function displayName that, given the pokemon data, below, uses reduce to return an array containing the names of the characters.

let pokemonData =[
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    }
    ];

    function Names(pokemonData){
    let names = pokemonData.reduce(function(a , b ){
         a.push(b.version.name)
         return a ;
        }, []);

        // console.log(pokemonData[0].version.name);

        return names;

    }
    

    console.log(Names(pokemonData));


    // Ex13: Write a function that takes the following array of objects, uses binary search to search for certain email input from the user, and return its value.


    const emailArr = [ {
        "name": "ude.Top",
        "email": "Taya.Kerluke53@gmail.com",
        "add": {
        "street": " Felds", "suie": "Ste 231",
        "city": "Tinamuth", "zcode": "07584-6653",
        "geo": { "lat": "75.023", "lng": "-17.1824" }
        },
        "phone": "795-827-5446 x18366",
        "website": "nico.com",
        "company": {
        "name": "Champlin, Barrows and me",
        "catchPhrase": "Object user-facing orchestration",
        "bs": " integrated content" 
       },
        "firstN": "Mida", "lastN": "Feey"
        } ]
       

        function searchForEmail(array){

            array.forEach(element=>{


                return element.email ? element.email:'';

            })
            
        }

        console.log(emailArr);










        
let employee1 = {
    firstName: 'Rawan',
    sayHi: function(){
        console.log("Hi Coach ! " + this.firstName);
    }
}

employee1.sayHi() // Hi Coach ! Rawan?


let employee2 = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true
    },
    printInfo: function(){
        console.log("Car owner? " + this.hasCar);
    }
}

employee2.printInfo() // undefied because we didnt enter inside the info, this here point on the object employee2?




let employee3 = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true,
        printAddress: function(){
            return this.data.address;
        },
        data: {
            address: "Zarqa"
        }
    },
}

console.log(employee3.info.printAddress()) //Zarqa, cuz this point on its perent which is info, and info contains both the address function and data which contain address ?