function solution(my_string) {
    let arr = Array.from(my_string);    
    arr = arr.filter(v => Number(v))
    
    let sum = 0;
    arr.map(i => sum+=Number(i))
    return sum;
}