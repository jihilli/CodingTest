import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        
        String b = "";
        
        for(int i = 0; i < a.length(); i++){
            char c = a.charAt(i);
            // 소문자 일 때
            if((int)c >= 97) {
                b += Character.toUpperCase(c);
            // 대문자 일 때
            } else {
                b += Character.toLowerCase(c);
            }
        }
        
        System.out.println(b);
    }
}