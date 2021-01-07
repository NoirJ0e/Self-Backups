#!MANAGED-CONFIG {{ downloadUrl}} interval=43200 strict=false
[General]
loglevel = notify
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, 100.84.0.0/10, localhost, *.local
dns-server = 119.29.29.29, 223.5.5.5, 1.2.4.8, 1.1.1.1
doh-server = https://cdn-doh.ssnm.xyz/dns-query
bypass-tun = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12
# 是否截取并保存 HTTP 流量, 对性能有影响
replica = false
ipv6 = false

http-listen = 127.0.0.1:6152
socks5-listen = 127.0.0.1:6153, 127.0.0.1:23456

internet-test-url = http://cp.cloudflare.com/generate_204
proxy-test-url = http://cp.cloudflare.com/generate_204

# 其他
# external-controller-access = password@0.0.0.0:6170
show-primary-interface-changed-notification = true
proxy-settings-interface = Primary Interface (Auto)
menu-bar-show-speed = false
allow-wifi-access = true
hide-crashlytics-request = true

[Proxy]
{{ getSurgeNodes(nodeList) }}

[Proxy Group]
Proxy = select, 🇹🇼 TW , 🇭🇰 HK , 🇸🇬 SG , 🇯🇵 JP , 🇺🇸 US , ALL
Apple = select, 🇭🇰 HK , 🇺🇸 US , Direct
Apple CDN = select, Direct, Apple
Microsoft = select, 🇭🇰 HK , Proxy, Direct
Streaming = select, 🇹🇼 TW , 🇭🇰 HK , 🇸🇬 SG , 🇯🇵 JP , 🇺🇸 US , ALL
Bahamut = select, 🇹🇼 TW 
Telegram = select, 🇸🇬 SG , Proxy
Spotify = select, 🇭🇰 HK ,Proxy
Direct = select, DIRECT, Proxy
🇹🇼 TW = select, {{ getNodeNames(nodeList, taiwanFilter) }}
🇭🇰 HK = select, {{ getNodeNames(nodeList, hkFilter) }}
🇸🇬 SG = select, {{ getNodeNames(nodeList, singaporeFilter) }}
🇯🇵 JP = select, {{ getNodeNames(nodeList, japanFilter) }}
🇺🇸 US = select, {{ getNodeNames(nodeList, usFilter) }}
ALL = select, {{ getNodeNames(nodeList) }}

[Rule]
DOMAIN-KEYWORD,baidu,DIRECT
DOMAIN-KEYWORD,ngabbs,Proxy
DOMAIN-KEYWORD,nga,Proxy
{{ remoteSnippets.Plex.main('Streaming') }}
{{ remoteSnippets.Spotify.main('Spotify') }}
{{ remoteSnippets.Telegram.main('Telegram') }}
{{ remoteSnippets.apple.main('Apple', 'Apple', 'Apple CDN', 'Apple', 'Apple') }}
{{ remoteSnippets.Discord.main('Proxy')}}
{{ remoteSnippets.netflix.main('Streaming') }}
{{ remoteSnippets.Youtube.main('Streaming') }}
{{ remoteSnippets.Bahamut.main('🇹🇼 TW ') }}
{{ remoteSnippets.Streaming.main('Streaming') }}
{{ remoteSnippets.StreamingCN.main('Direct') }}
{{ remoteSnippets.China.main('Direct') }}
RULE-SET,SYSTEM,DIRECT
RULE-SET,LAN,DIRECT
GEOIP,CN,Direct
FINAL,Proxy

[URL Rewrite]
^https?://(www.)?g.cn https://www.google.com 302
^https?://(www.)?google.cn https://www.google.com 302

[MITM]
ca-passphrase = 398E295E
ca-p12 = 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
