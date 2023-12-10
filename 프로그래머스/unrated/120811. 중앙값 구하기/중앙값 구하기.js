function solution(array) {
    array = array.sort((a,b) => a-b);
    
    const middleNum = Math.floor(array.length/2) ;

    const answer = array[middleNum];
    return answer;
}