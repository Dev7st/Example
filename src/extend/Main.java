package extend;

public class Main {
    public static void main(String[] args) {
        Animal animal = new Cat();
        Cat cat = (Cat) animal;


        System.out.println(animal.name); // null, upcasting

        cat.tailCount = 1;
        System.out.println(cat.tailCount); // 1, downcasting
    }
}
