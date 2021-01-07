'use strict';

const { utils } = require('surgio');
const mySTCFilter = utils.useKeywords(['D3']);
const mynonSTCFilter = utils.discardKeywords(['D3']);
const originFilter = utils.discardKeywords(['AGA', ['Azure'],['AZURE'],['ANYCAST']]);

/**
 * 使用文档：https://surgio.royli.dev/
 */
module.exports = {
  gateway: {
    auth: true,
    accessToken: '@&zZ7HH37e&t6yHLiQ^8',
  },
  /**
   * 远程片段
   * 文档：https://surgio.royli.dev/guide/custom-config.html#remotesnippets
   */
  remoteSnippets: [
    // 调用方法: remoteSnippet.Name.main
    {
      name: 'Plex',
      url: 'https://raw.githubusercontent.com/raenoll/Surge/master/Ruleset/Fantasyland.list',
    },
    {
      name: 'apple', // 模板中对应 remoteSnippets.apple
      url: 'https://raw.githubusercontent.com/geekdada/surge-list/master/surgio-snippet/apple.tpl',
      surgioSnippet: true
    },
    {
      name: 'netflix',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/Netflix.list',
    },
    {
      name: 'NetflixClash',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/StreamingMedia/Video/Netflix.yaml',
    },
    {
      name: 'Spotify',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Music/Spotify.list',
    },
    {
      name: 'Youtube',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/YouTube.list',
    },
    {
      name: 'Bahamut',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/Bahamut.list',
    },
    {
      name: 'Streaming',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Streaming.list',
    },
    {
      name: 'Telegram',
      url: 'https://github.com/DivineEngine/Profiles/raw/master/Surge/Ruleset/Extra/Telegram/Telegram.list',
    },
    {
      name: 'China',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/China.list',
    },
    {
      name: 'StreamingCN',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/StreamingCN.list',
    },
    {
      name: 'Discord',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Game/Discord.list',
    },
    {
      name: 'SpotifyClash',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/StreamingMedia/Music/Spotify.yaml',
    },
    {
      name: 'YoutubeClash',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/StreamingMedia/Video/YouTube.yaml',
    },
    {
      name: 'BahamutClash',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/StreamingMedia/Video/Bahamut.yaml',
    },
    {
      name: 'StreamingClash',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/StreamingMedia/Streaming.yaml',
    },
    {
      name: 'ChinaClash',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/China.yaml',
    },
    {
      name: 'TelegramClash',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/Extra/Telegram/Telegram.yaml',
    },
    {
      name: 'UnbreakClash',
      url: 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/Unbreak.yaml',
    },
  ],
  customFilters: {
    nonOriginJapanFilter: utils.mergeFilters([utils.japanFilter, originFilter]),
    //
    stcSingaporeFilter: utils.mergeFilters([utils.singaporeFilter, mySTCFilter]),
    stcHKFilter: utils.mergeFilters([utils.hkFilter, mySTCFilter]),
    stcJPFilter: utils.mergeFilters([utils.japanFilter, mySTCFilter]),
    stcTWFilter: utils.mergeFilters([utils.taiwanFilter, mySTCFilter]),
    stcUSFilter: utils.mergeFilters([utils.usFilter, mySTCFilter]),
    nonstcSingaporeFilter: utils.mergeFilters([utils.singaporeFilter, mynonSTCFilter]),
    nonstcHKFilter: utils.mergeFilters([utils.hkFilter, mynonSTCFilter]),
    nonstcJPFilter: utils.mergeFilters([utils.japanFilter, mynonSTCFilter]),
    nonstcTWFilter: utils.mergeFilters([utils.taiwanFilter, mynonSTCFilter]),
    nonstcUSFilter: utils.mergeFilters([utils.usFilter, mynonSTCFilter]),
  },
  artifacts: [
    {
      name: 'Dler.conf',
      template: 'Surge-self',
      provider: 'Dler',
      //combineProviders: ['STC-V2'],
    },
    {
      name: 'STC.conf',
      template: 'Surge-self',
      provider: 'STC-V2',
      //combineProviders: ['STC-V2'],
    },
    //{
   //   name: 'Dler.yaml',
     // template: 'Clash-Macbook',
    //  provider: 'Dler'
    //},
   // {
    //  name: 'Dler.yaml',
   //   template: 'Clash-Macbook',
     // provider: 'STC-V2'
   // },

  ],
  /**
   * 订阅地址的前缀部分，以 / 结尾
   * 例如阿里云 OSS 的访问地址 https://xxx.oss-cn-hangzhou.aliyuncs.com/
   */
  urlBase: 'https://surgio-eta-seven.vercel.app',
  surgeConfig: {
    v2ray: 'native', // 默认 'native', 可选 'external'
    shadowsocksFormat: 'ss', // 默认 'ss', 可选 'custom'
  },
  binPath: {
    // 安装教程: https://surgio.royli.dev/guide/install-ssr-local.html
    shadowsocksr: '/usr/local/bin/ssr-local',
  },
  upload: {
    // 默认保存至根目录，可以在此修改子目录名，以 / 结尾，默认为 /
    prefix: '/',
    bucket: 'surgio-store',
    // 支持所有区域
    region: 'oss-cn-hangzhou',
    // 以下信息于阿里云控制台获得
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    accessKeySecret: 'YOUR_ACCESS_KEY_SECRET',
  },
  // 非常有限的报错信息收集
  analytics: true,
};

