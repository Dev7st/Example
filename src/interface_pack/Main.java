package interface_pack;

public class Main {
    public static void main(String[] args) {
        System.out.println(Interface1.value);

        Interface1 impl = new Impl();
        impl.Method();
        impl.Method2();

        Interface1.Static();
    }
}
