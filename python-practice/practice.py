# def reverse_str(str):
#     reversed_str = ''
#     for character in str:
#         reversed_str = character + reversed_str
#     return reversed_str


# original_string = 'Hello, my name is Mark'
# new_string = reverse_str(original_string)
# print(new_string)


# Function 1

def get_largest_int(int_list):
    largest_int = max(int_list)
    return largest_int


test_list = [0, 12, 4, 5, 0, 200, 3, 0, 1020, 43, 90]
print("Largest Int: ", get_largest_int(test_list))


def get_largest_int_the_hard_way(int_list):
    largest_int = None
    for int in int_list:
        if not largest_int or (largest_int and int > largest_int):
            largest_int = int

    return largest_int


print("Largest Int alt: ", get_largest_int_the_hard_way(test_list))


# Function 2


def double_vision(str):
    doubled_str = ''
    for char in str:
        doubled_str += char
        doubled_str += char

    return doubled_str


test_str = "Hello, my name is Mark"
print("Doubled String: ", double_vision(test_str))
