public class Person implements Comparable<Person>{
    private int userUid;

    public int getUserUid() {
        return userUid;
    }
    public Person(int userUid) {
        this.userUid = userUid;
    }

    @Override
    public int compareTo(Person o) {
        return this.userUid - o.userUid;
    }
}
