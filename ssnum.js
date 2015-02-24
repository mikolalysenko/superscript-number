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
  'e': 'ᵉ'
}

function superScriptNumber(num) {
  var numStr = '' + num
  if(numStr === 'NaN') {
    return 'ᴺᵃᴺ'
  }
  if(numStr === 'Infinity') {
    return '⁺ᴵⁿᶠ'
  }
  if(numStr === '-Infinity') {
    return '⁻ᴵⁿᶠ'
  }
  return numStr.split('').map(function(c) {
    var supc = SUPERSCRIPTS[c]
    if(supc) {
      return supc
    }
    return ''
  }).join('')
}