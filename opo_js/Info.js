const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter name: ',(name)=>{
    rl.question('Enter age: ',(age)=>{
        rl.question('Enter salary: ',(salary)=>{
            console.log('--------------------------------');
            console.log(`Name is ${name}.\nAge is ${age}\nSalary is ${salary}.`)

            rl.close();
        })
    })
})