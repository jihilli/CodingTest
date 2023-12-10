function solution(n) {
    
    const arr = String(n).split('');
    
    let answer = 0;

    arr.map(el => { answer += Number(el)} )
    
    return answer;
}