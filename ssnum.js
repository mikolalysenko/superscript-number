module.exports = superScriptNumber

var SUPERSCRIPTS = {
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
  '+': '⁺',
  '-': '⁻',
  'a': 'ᵃ',
  'b': 'ᵇ',
  'c': 'ᶜ',
  'd': 'ᵈ',
  'e': 'ᵉ',
  'f': 'ᶠ',
  'g': 'ᵍ',
  'h': 'ʰ',
  'i': 'ⁱ',
  'j': 'ʲ',
  'k': 'ᵏ',
  'l': 'ˡ',
  'm': 'ᵐ',
  'n': 'ⁿ',
  'o': 'ᵒ',
  'p': 'ᵖ',
  'r': 'ʳ',
  's': 'ˢ',
  't': 'ᵗ',
  'u': 'ᵘ',
  'v': 'ᵛ',
  'w': 'ʷ',
  'x': 'ˣ',
  'y': 'ʸ',
  'z': 'ᶻ'
}

function superScriptNumber(num, base) {
  var numStr = num.toString(base)
  if(numStr === 'NaN')       { return 'ᴺᵃᴺ' }
  if(numStr === 'Infinity')  { return '⁺ᴵⁿᶠ' }
  if(numStr === '-Infinity') { return '⁻ᴵⁿᶠ' }
  return numStr.split('').map(function(c) {
    var supc = SUPERSCRIPTS[c]
    if(supc) {
      return supc
    }
    return ''
  }).join('')
}