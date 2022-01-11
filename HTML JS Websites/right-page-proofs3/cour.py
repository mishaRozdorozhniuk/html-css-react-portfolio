# for n in range(2, 10):
# 	for x in range(2, n):
		# print(x)

# def fib(n):
# 	a, b = 0, 1
# 	while a < n:
# 		print(a, end=' ')
# 		a, b = b, a+b
# 	print()


# print(fib(2000))

	#TASK1

# a = [1, 30, 4, 8, 2, 34]
# new_list = []
# no_repeat = []
# for item in a:
# 	if item < 10:
# 		new_list.append(item)
# for j in list(set(new_list)):
# 	no_repeat.append(j)
# print(sum(no_repeat)) # 15

# 	#TASK2

# def fuck_task(arr: list):
# 	sort_list = []
# 	low = arr[0]-1
# 	high = len(arr)-1
# 	mid = (low + high) // 2
# 	second_part = arr[mid:]
# 	return sorted(second_part)

# print(fuck_task([2, 6, 12, 22, 5, 8, 7]))

# 	#TASK3

# enter_number = int(input('enter some number:'))
# low_number = []
# high_number = []
# _list = [2, 4, 8, 22, 65, 45, 9]
# for num in _list:
# 	if enter_number > num:
# 		low_number.append(num)
# 	else:
# 		high_number.append(num)

# 		#TASK4

# double_num = [12, 54, 23, 67, 888]
# print(min(double_num))

matrix = [
     [1, 2, 3, 4],
     [5, 6, 7, 8],
     [9, 10, 11, 12],
]

transported = []
for i in range(4):
	transported.append([row[i] for row in matrix])
print(transported)

