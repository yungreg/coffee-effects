

// ( this is the example copy and pasted to then type out.. it avopde formatting problems when copying over stuff from the lessons.typing is... hardf)

// let output = ''

// const coffees = [
//     "light colombian roast", "hawaiian dark roast", "guatemalan blend medium roast",
//     "dark madagascar blend", "jamaican dark blue", "jamaican medium roast",
//     "salvador robusto light"
// ]
// for (const coffee of coffees) {
//     if (coffee.includes('light')) {
//         output += `I'll have the ${} and add cream only`
//     }
//     else if (coffee.includes('Medium')) {
//         output += `I'll have the ${} and add cream only`
//     }   else if (coffee.includes('dark')) {
//         output += `I'll have the ${} and add cream and sugar`
//     }    
//     output +='\n'
// }
// 
// console.log(output)


const coffees = [
    'light columbian roast', 'hawaiian dark roast', 'guatemalan blend medium roast', 'dark madagascar blend','jamaican dark blue', 'jamaican medium roast', 'salvador robusto light' 
]

let output = ""

for (const coffee of coffees) {
    if (coffee.includes("light" || 'columbian')) {
        output += `I'll have the ${coffee} and drink it black`
    }
    else if (coffee.includes("medium" ||'jamaican')) {
        output += `I'll have the ${coffee} and add cream only`
    }
    else if (coffee.includes("dark" || 'hawaiian')) {
        output += `I'll have the ${coffee} and add cream and sugar`
    }
    output += "\n"
}

console.log(output)