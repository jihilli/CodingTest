function solution(my_string, letter) {
    
    // const arr = Array.from(my_string);

    const answer = [...my_string].filter(x => x != letter);
    return answer.join('');
}