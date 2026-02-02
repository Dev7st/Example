import java.util.Comparator;

public class Person implements Comparator<Person> {
    private int userUid;

    public int getUserUid() {
        return userUid;
    }
    public Person(int userUid) {
        this.userUid = userUid;
    }

    @Override
    public int compare(Person o1, Person o2) {
        return o1.userUid - o2.userUid;
    }
}
