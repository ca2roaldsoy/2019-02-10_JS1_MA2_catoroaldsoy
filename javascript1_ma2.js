//MODULE ASSIGNMENT 2 - LEVEL 1

//1. Create a function that displays prototypal inheritance
function Drink(taste) {
                
    return this.taste = taste
 }
            
    Drink.prototype.soda = function () {
                
    console.log("I'll have a " + this.taste)
 };
            
    //create new drinks
    var fanta = new Drink("Fanta");
    var cola = new Drink("Coca-Cola");
    var pepsi = new Drink("Pepsi");
            
        //the .soda will inherit from Drink.prototype.soda
        console.log(fanta.soda(), cola.soda(), pepsi.soda())

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            
    // slices nr 5       
    var myArray = numArray.slice(4,5);
            
        console.log(myArray)


//3. Delete the last number in the array that you created above.
    numArray.pop()
            
        console.log(numArray);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
function fruitReplace (){
            
    var pString = document.getElementById("pString").innerHTML;
    var newString = pString.replace(/strawberries/g, "bananas").replace(/strawberry/g, "banana");
    document.getElementById("pString").innerHTML = newString;
                
}

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var footballTeams = ["ManUtd", "Viking", "Milan", "Barcelona"];
var cars = ["BMW", "Toyota", "Lexus", "Mazda"]
            
    console.log (footballTeams);
            
//removes footballteams and adds cars by button click
    document.getElementById("footballTeams").addEventListener ("click", function(){
                                            
    footballTeams.splice(0, 4)
                
        console.log (cars);
            
});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
// get name using filter       
var hero = [
                
    { name: "Clark Kent", alias: "Superman"  },
    { name: "Peter Parker", alias: "Spiderman"  },
    { name: "Donald Duck", alias: "Phantom Duck"  }       
]
            
    var superHero = hero.filter(function(name) {
                                     
        return name.alias

    })
        console.log(superHero);
            
            
// get name using map        
var hero = [
                
    { name: "Clark Kent", alias: "Superman"  },
    { name: "Peter Parker", alias: "Spiderman"  },
    { name: "Donald Duck", alias: "Phantom Duck"  }   
]
            
    var superHero = hero.map(function(hero) {
                                   
        return hero.name + " is " + hero.alias

    })
        console.log(superHero);

//7. Create a simple function that logs the date.
var theDate = new Date()
            
    console.log(theDate);