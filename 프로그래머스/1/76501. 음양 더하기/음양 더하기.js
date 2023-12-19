function solution(absolutes, signs) {
    
    let answer = 0;
    
    absolutes.map((item, idx) => {
        signs[idx] ? absolutes[idx] = item : absolutes[idx] = item*(-1);
        answer += absolutes[idx];
    })
    
    return answer;    
    
}