import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] hand = {"가위","바위","보"};

        Random random = new Random();
        Scanner sc = new Scanner(System.in);

        while(true){
            String computerPick = hand[random.nextInt(3)];
            try {
                String myPick = hand[sc.nextInt()];
                if(myPick == computerPick){
                    System.out.println("나 : "+myPick);
                    System.out.println("컴퓨터 : "+computerPick);
                    System.out.println("비겼습니다.");
                } else if(myPick == "가위" && computerPick == "바위"){
                    System.out.println("나 : "+myPick);
                    System.out.println("컴퓨터 : "+computerPick);
                    System.out.println("졌습니다.");
                } else if (myPick == "바위" && computerPick == "보") {
                    System.out.println("나 : "+myPick);
                    System.out.println("컴퓨터 : "+computerPick);
                    System.out.println("졌습니다.");
                } else if (myPick == "보" && computerPick == "가위") {
                    System.out.println("나 : "+myPick);
                    System.out.println("컴퓨터 : "+computerPick);
                    System.out.println("졌습니다.");
                } else {
                    System.out.println("나 : "+myPick);
                    System.out.println("컴퓨터 : "+computerPick);
                    System.out.println("이겼습니다.");
                }
            } catch (Exception e){
                System.out.println("다시 입력하세요");
                sc.nextLine();
                continue;
            }
        }
    }
}