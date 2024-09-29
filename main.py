name1='aakash'
name2='akshita'
name1=list(name1)
name2=list(name2)
i=0
for char in name1[:]:
    if char in name2:
        name2.remove(char)
        name1.remove(char)

newstring=name1+name2

length=len(newstring)

flames=['f','l','a','m','e','s']

index=0

while len(flames)>1:
    index=(index+length-1)%len(flames)
    flames.pop(index)
print(flames)
