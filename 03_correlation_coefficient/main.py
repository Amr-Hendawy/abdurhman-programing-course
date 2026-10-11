import math

#Correlation Coefficient
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
n = len(x)
# i = 0
i=sum_x = sum_y = sum_xy = sum_xPow = sumx_yPow=a=b=r= 0
# sum_y = 0
# sum_xy = 0
# sum_xPow = 0
# sumx_yPow = 0
# a = 0
# b = 0
# r = 0
while i < n:
    sum_x += x[i]
    sum_y += y[i]
    sum_xy += x[i] * y[i]
    sum_xPow += x[i] ** 2
    sumx_yPow += y[i] ** 2
    i += 1
    print("Sum of x:", sum_x)
    print("Sum of y:", sum_y)
    print("Sum of xy:", sum_xy)
    print("Sum of x2:", sum_xPow)
    print("Sum of y2:", sumx_yPow)
a = (n * sum_xy - sum_x * sum_y)
nominator =  (n * sum_xPow - sum_x ** 2)(n * sumx_yPow - sum_y ** 2)

sqrt_nominator = math.sqrt(nominator)

r = (a / sqrt_nominator)

# r = (n * sum_xy - sum_x * sum_y) / (((n * sum_xPow - sum_x ** 2) * (n * sum_y2 - sum_y ** 2)) ** 0.5)

print("Correlation Coefficient (r):", r)