import math

x = []
sd = n = ave = a = b = i = 0


n = int(input("How many Items?"))

for i in range(n):
    x.append(float(input("Give me item: ")))
    ave += x[i]

ave = ave / n

print("Average:", ave)

for j in range(n):
    a += (x[j] - ave) ** 2
    print(a)

b = a / n
sd = math.sqrt(b)

print("Standard Deviation", sd)