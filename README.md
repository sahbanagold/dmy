##dmy
![alt travis-ci](https://travis-ci.org/sahbanagold/dmy.svg?branch=master)

##Examples:
default language is Indonesia
```js
var dmy = require('dmy')
console.log(dmy())
```
output :
```
19/10/2016
```

```js
var dmy = require('dmy')
console.log(dmy("dmy"))
```
output :
```
19/10/2016
```


```js
var dmy = require('dmy')
console.log(dmy("dmy","m"))
```
output :
```
19/Oktober/2016
```


```js
var dmy = require('dmy')
console.log(dmy("mdy"))
```
output :
```
10/19/2016
```


```js
var dmy = require('dmy')
console.log(dmy("mdy","m"))
```
output :
```
Oktober/10/2016
```
