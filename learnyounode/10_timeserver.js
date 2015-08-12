var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
    // socket handling logic
    //console.log(strftime('%Y-%m-%d %H:%M\n'));
    socket.end(strftime('%Y-%m-%d %H:%M\n'))
});
server.listen(process.argv[2]);

/*
   strftime('%B %d, %Y %H:%M:%S')
A: full weekday name
a: abbreviated weekday name
B: full month name
b: abbreviated month name
C: AD century (year / 100), padded to 2 digits
c: equivalent to %a %b %d %X %Y in en-US (based on locale)
D: equivalent to %m/%d/%y in en-US (based on locale)
d: day of the month, padded to 2 digits (01-31)
e: day of the month, padded with a leading space for single digit values (1-31)
F: equivalent to %Y-%m-%d in en-US (based on locale)
H: the hour (24-hour clock), padded to 2 digits (00-23)
h: the same as %b (abbreviated month name)
I: the hour (12-hour clock), padded to 2 digits (01-12)
j: day of the year, padded to 3 digits (001-366)
k: the hour (24-hour clock), padded with a leading space for single digit values (0-23)
L: the milliseconds, padded to 3 digits [Ruby extension]
l: the hour (12-hour clock), padded with a leading space for single digit values (1-12)
M: the minute, padded to 2 digits (00-59)
m: the month, padded to 2 digits (01-12)
n: newline character
o: day of the month as an ordinal (without padding), e.g. 1st, 2nd, 3rd, 4th, ...
P: "am" or "pm" in lowercase (Ruby extension, based on locale)
p: "AM" or "PM" (based on locale)
R: equivalent to %H:%M in en-US (based on locale)
r: equivalent to %I:%M:%S %p in en-US (based on locale)
S: the second, padded to 2 digits (00-60)
s: the number of seconds since the Epoch, UTC
T: equivalent to %H:%M:%S in en-US (based on locale)
t: tab character
U: week number of the year, Sunday as the first day of the week, padded to 2 digits (00-53)
u: the weekday, Monday as the first day of the week (1-7)
v: equivalent to %e-%b-%Y in en-US (based on locale)
W: week number of the year, Monday as the first day of the week, padded to 2 digits (00-53)
w: the weekday, Sunday as the first day of the week (0-6)
X: equivalent to %D in en-US (based on locale)
x: equivalent to %T in en-US (based on locale)
Y: the year with the century
y: the year without the century (00-99)
Z: the time zone name, replaced with an empty string if it is not found
z: the time zone offset from UTC, with a leading plus sign for UTC and zones
   east of UTC and a minus sign for those west of UTC, hours and minutes follow
   each padded to 2 digits and with no delimiter between them.
*/
