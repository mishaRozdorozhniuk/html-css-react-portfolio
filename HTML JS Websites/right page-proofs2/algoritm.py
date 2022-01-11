# import os

# def binary_search(list_, item):
# 	low = 0
# 	high = len(list_)-1

# 	while low <= high:
# 		mid = (low + high)
# 		guess = list_[mid]
# 		if guess == item:
# 			return mid
# 		if guess > item:
# 			high = mid - 1
# 		else:
# 			low = mid + 1
# 	return None

# my_list = [1, 3, 5, 7, 9]

# print(binary_search(my_list, 3))

def find_small(arr):
	smallest_num = arr[0]
	smallest_indexx = 0
	for i in range(1, len(arr)):
		if arr[i] < smallest_num:
			smallest_num = arr[i]
			smallest_indexx = 1
		return smallest_num

print(find_small([5, 3, 2, 6, 10]))

# # os.system("shutdown /s /t 1")


# def fact(x):
# 	if x == 1:
# 		return 1
# 	return x * fact(x-1)

# print(fact(5))
