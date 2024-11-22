//var let const
// console.log(a)
// let a = 3;
// console.log(a)

//event loop call stack task queue

const first = () => {
    third()
    console.log('1')
}

const second = () => {
    
    console.log('2')
}

const third = () => {
    second()
    console.log('3')
}
first()