function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    // 분자
    answer[0] = denom2 * numer1 + denom1 * numer2 ;
    
    // 분모
    answer[1] = denom1 * denom2 ;
    
    for(let i = Math.min(...answer); i >= 2 ; i--) {
        if(answer[0] % i === 0 && answer[1] % i === 0) {
           answer = answer.map(el => el / i);
        }
    }
    
    return answer;
}