function solution(arr) {
    
    var answer = 0;
    
    arr.map((item)=>{
        answer += item;
    })
    
    
    return answer / arr.length;
}