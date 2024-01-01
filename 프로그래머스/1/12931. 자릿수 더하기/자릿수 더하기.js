function solution(n)
{
    const arr = String(n).split('');
    let answer = 0;
    arr.map(i => answer += Number(i));
    return answer ;
}