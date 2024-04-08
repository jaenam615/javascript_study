let command = prompt("Enter a command: ");
const todos = [];

while(command !== 'quit' && command !== 'q'){
    if (command === 'new'){
        let item = prompt ("Add a todo: ")
        todos.push(item);
        console.log(`Adding "${item}" to todo list at index ${todos.length}`)
    } else if (command === 'list'){
        console.log('**********************')
        for (todo of todos){
            console.log(`${todos.indexOf(todo) + 1}: ${todo}`);
        }
        console.log('**********************')
    } else if (command === 'delete'){
        let deleteItem = prompt ("Which todo would you like to delete?: ")
        // if (!Number.isNaN(parseInt(deleteItem))){
            let deleted = todos.splice((parseInt(deleteItem)-1), 1);
            console.log(`Deleted ${deleted}`); 
        // } else {
        //     alert ('Invalid index');
        //     console.log('Invalid index');
        // }

    } else {
        alert ('Invalid command!');
        console.log('Invalid command!');
    }
    command = prompt("Enter a command: ");
}
alert ("Quitting ... ");
console.log("Quitting ... ");