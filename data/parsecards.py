import sys
f = open(sys.argv[1])
o = open('output.js','w')

contents = f.read()

split = contents.split('<>')

o.write('[')

for i in split:
    o.write('\"' + i + '\"' + ",")

o.write(']')
f.close()
o.close()
