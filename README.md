superscript-number
==================
Converts a number to a superscript unicode character.

# Example

```javascript
var super = require('superscript-number')

console.log(super(1052))
console.log(super(-66))
console.log(super(1e32))
console.log(super(Infinity))
console.log(super(NaN))
console.log(super(-Infinity))
```

Output:

```
¹⁰⁵²
⁻⁶⁶
¹ᵉ⁺³²
⁺ᴵⁿᶠ
ᴺᵃᴺ
⁻ᴵⁿᶠ
```

Not the prettiest kerning in the world, but it works :shrug:

# Install

```
npm i superscript-number
```

# API

#### `var str = require('superscript-number')(x[, base])`
Converts a number to a superscript string

* `x` is a number
* `base` is an integer between 2 and 36 represeting the base of the output

**Returns** a superscript string printing out `x`

# License
(c) 2015 Mikola Lysenko. MIT License.