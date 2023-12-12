function solution(s1, s2) {
    
    var answer = 0;
    
    s1.map((e1) => {
        s2.map(e2 => {
            if(e1 === e2) answer++;
        })
    });
    
    return answer;
}