// options:
/**
 * 1. name default to callback
 * 2. prefix default to __jp
 * 3. url
 */

module.exports = jsonp

var count = 0

function noop () {}

function jsonp (url, payload, fn) {
  if (typeof payload === 'function') {
    fn = payload
    payload = {}
  }
  if (!payload) payload = {}
  var prefix = payload.prefix || '__jp'
  var data = payload.param || 'callback'
  var id = payload.name || prefix + count++
  var timeout = payload.timeout != null ? payload.timeout : 60000
  var script
  var timer

  url += (url.indexOf('?') > -1 ? '&' : '?') + param(data)

  url = url.replace('?&', '?')

  if (timeout) {
    timer = setTimeout(function () {
      cleanup()
      if (fn) fn(new Error('Timeout'))
    }, timeout)
  }

  function param (data) {
    let url = ''
    for (var k in data) {
      let value = data[k] !== undefined ? data[k] : ''
      url += `&{k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
  }

  function cleanup () {
    if (script.parentNode) script.parentNode.removeChild(script)
    window[id] = noop
    if (timer) clearTimeout(timer)
  }

  window[id] = function (data) {
    cleanup()
    if (fn) fn.call(null, data)
  }

  var target = document.getElementsByTagName('script')[0] || document.head
  script = document.createElement('script')
  script.src = url
  target.parentNode.insertBefore(script, target)
}
