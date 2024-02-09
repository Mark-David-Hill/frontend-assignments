# def reverse_str(str):
#     reversed_str = ''
#     for character in str:
#         reversed_str = character + reversed_str
#     return reversed_str


# original_string = 'Hello, my name is Mark'
# new_string = reverse_str(original_string)
# print(new_string)


# Function 1

# def get_largest_int(int_list):
#     largest_int = max(int_list)
#     return largest_int


# test_list = [0, 12, 4, 5, 0, 200, 3, 0, 1020, 43, 90]
# print("Largest Int: ", get_largest_int(test_list))


# def get_largest_int_the_hard_way(int_list):
#     largest_int = None
#     for int in int_list:
#         if not largest_int or (largest_int and int > largest_int):
#             largest_int = int

#     return largest_int


# print("Largest Int alt: ", get_largest_int_the_hard_way(test_list))


# # Function 2


# def double_vision(str):
#     doubled_str = ''
#     for char in str:
#         doubled_str += char
#         doubled_str += char

#     return doubled_str


# test_str = "Hello, my name is Mark"
# print("Doubled String: ", double_vision(test_str))


# Write a program that takes a string and returns the letters in alphabetical order.
# Here is an example of the output: "Hi there" => "eeehhhirt"
# BONUS: Make the output represent the input characters (each character returns capitalized).

# isAlpha

# def alphabetize(str):
#     newStr = ''
#     # while len(str) > 1:
#     lower_str = str.lower()
#     print(lower_str)
#     for _ in range(5):
#         print(lower_str)
#         newChar = min(lower_str)
#         newStr += newChar

#     return newStr


# print("Hi there".lower())

# orderedStr = alphabetize("Hi there")
# print('test')
# print(orderedStr)
# print(min('Hello'.lower()))

# print(min("hello"))

# def letters(string):
#     string_to_check = string.lower()
#     input_letters = [char for char in string_to_check if char.isalpha()]
#     sorted_letters = sorted(input_letters)
#     sorted_string = ''.join(sorted_letters).upper()
#     return sorted_string


# sent = "how are you"
# print(letters(sent))

string = "Hi there"
upper = string.upper()
alphabetical = sorted(upper)
print(''.join(alphabetical))
