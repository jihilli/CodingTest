function solution(strArr) {
    let answer = [];
    let str = '';
    
    // answer = strArr.map((item, idx) => {
    //     idx % 2 === 1 ? item[idx].toUpperCase() : item[idx].toLowerCase();
    // })
    
    for(let i = 0; i < strArr.length; i++){
       answer[i] = i % 2 === 0 ?  strArr[i].toLowerCase() : strArr[i].toUpperCase();
    }
    
    return answer;
}