import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
            // 더미 데이터를 넣어 가이드 제공
            TreeSet<Person> people = new TreeSet<>(new Person(0));

            // 실제 데이터를 추가하고 정렬
            people.add(new Person(1));
            people.add(new Person(4));
            people.add(new Person(2));
            people.add(new Person(3));

            for(Person uid : people) {
                System.out.println(uid.getUserUid());
        }
    }
}