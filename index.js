const fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    D3Path = path.join(__dirname, 'D3.html');
    Google-ChartPath = path.join(__dirname, 'Google-charts.html');
    ChartPath = path.join(__dirname, 'Chart.html');
    EchartsPath = path.join(__dirname, 'Echarts.html');

function D3Maps(args, content) {
    const template = fs.readFileSync(D3Path).toString();
    let options = {};
    if (content.length) {
        options = content;
    }
    return _.template(template)({
        id: 'D3' + ((Math.random() * 9999) | 0),
        option: options,
        width: args[0] || '100%',
        height: args[1] || 300
    });
};

hexo.extend.tag.register('D3', D3Maps, {
    async: true,
    ends: true
});

function ChartMaps(args, content) {
    const template = fs.readFileSync(ChartPath).toString();
    let options = {};
    if (content.length) {
        options = content;
    }
    return _.template(template)({
        id: 'chart' + ((Math.random() * 9999) | 0),
        option: options,
        width: args[0] || '100%',
        height: args[1] || 300
    });
};

hexo.extend.tag.register('chart', D3Maps, {
    async: true,
    ends: true
});

function Google-ChartMaps(args, content) {
    const template = fs.readFileSync(Google-ChartPath).toString();
    let options = {};
    if (content.length) {
        options = content;
    }
    return _.template(template)({
        id: 'googlechart' + ((Math.random() * 9999) | 0),
        option: options,
        width: args[0] || '100%',
        height: args[1] || 300
    });
};

hexo.extend.tag.register('google-chart', Google-ChartMaps, {
    async: true,
    ends: true
});

function EchartsMaps(args, content) {
    const template = fs.readFileSync(EchartsPath).toString();
    let options = {};
    if (content.length) {
        options = content;
    }
    return _.template(template)({
        id: 'echarts' + ((Math.random() * 9999) | 0),
        option: options,
        width: args[0] || '100%',
        height: args[1] || 300
    });
};

hexo.extend.tag.register('echarts', EchartsMaps, {
    async: true,
    ends: true
});

