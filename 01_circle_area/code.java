// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Scanner;
class Main {

    static double calculateCircleArea(double radius) {
        double area = radius * radius * Math.PI;
        return area;
    }

    public static void main(String[] args) {

        Scanner scanner  = new Scanner(System.in);

        System.out.println("Enter The Radius");

        double radius = scanner.nextDouble();

        double area = calculateCircleArea(radius);

        System.out.println("Circle Area" + area);

        scanner.close();

    }
}