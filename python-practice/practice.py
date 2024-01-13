def reverse_str(str):
    reversed_str = ''
    for character in str:
        reversed_str = character + reversed_str
    return reversed_str


original_string = 'Hello, my name is Mark'
new_string = reverse_str(original_string)
print(new_string)
