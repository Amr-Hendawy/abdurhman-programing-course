using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter The Radius:");
        double radius = Convert.ToDouble(Console.ReadLine());
        double area = Math.PI * radius * radius;
        Console.WriteLine("Circle Area =" + area);
    }
}