function solution(myString) {
    let arr = myString.split('');
    let answer = ''
    arr = arr.map(item => 
    {answer += item.toUpperCase()})
    
    return answer;
}