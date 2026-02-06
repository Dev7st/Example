import java.io.*;

public class Main {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();

        try(FileInputStream fileInputStream = new FileInputStream("index.txt");
            BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);
            FileOutputStream fileOutputStream = new FileOutputStream("output.txt");
            BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(fileOutputStream)){
            int i;
            while ((i= bufferedInputStream.read()) !=-1){
                bufferedOutputStream.write(i);
            }
        } catch (IOException e){

        }

        long endTime = System.currentTimeMillis();
        System.out.println(endTime - startTime);
    }
}