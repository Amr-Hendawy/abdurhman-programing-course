#Correlation Coefficient
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
n = len(x)
i = 0
sum_x = 0
sum_y = 0
sum_xy = 0
sum_x2 = 0
sum_y2 = 0
a = 0
b = 0
r = 0
while i < n:
    sum_x += x[i]
    sum_y += y[i]
    sum_xy += x[i] * y[i]
    sum_x2 += x[i] ** 2
    sum_y2 += y[i] ** 2
    i += 1
    print("Sum of x:", sum_x)
    print("Sum of y:", sum_y)
    print("Sum of xy:", sum_xy)
    print("Sum of x^2:", sum_x2)
    print("Sum of y^2:", sum_y2)
a = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)
b = (sum_y - a * sum_x)
r = (n * sum_xy - sum_x * sum_y) / (((n * sum_x2 - sum_x ** 2) * (n * sum_y2 - sum_y ** 2)) ** 0.5)
print("Slope (a):", a)
print("Intercept (b):", b)
print("Correlation Coefficient (r):", r)