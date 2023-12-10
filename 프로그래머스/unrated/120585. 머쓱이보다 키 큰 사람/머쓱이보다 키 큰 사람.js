function solution(array, height) {
    answer = array.filter(v => v > height);
    return answer.length;
}