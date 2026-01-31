package interface_pack;

public interface Interface1 {
    int value = 100;

    void Method();
    default void Method2() {
        System.out.println("Default Method");
    }
    static void Static() {
        System.out.println("Static Method");
    }
}
