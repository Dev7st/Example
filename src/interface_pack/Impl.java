package interface_pack;

public class Impl implements Interface1, Interface2 {

    @Override
    public void Method() {
        System.out.println("Method");
    }

    @Override
    public void Method2() {
        System.out.println("Override Method");
    }
}
