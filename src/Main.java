import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
            TreeSet<Person> people = new TreeSet<>();
            people.add(new Person(1));
            people.add(new Person(4));
            people.add(new Person(2));
            people.add(new Person(3));

            for(Person uid : people) {
                System.out.println(uid.getUserUid());
        }
    }
}