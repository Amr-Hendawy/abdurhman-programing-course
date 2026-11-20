def sum(n):
    sum = 0
    for nums in range(1, n + 1):
        sum += nums
    return sum
print(sum(5))

def sumit(n):
    sum = n * (n + 1) / 2
    return sum
print(sum(5))