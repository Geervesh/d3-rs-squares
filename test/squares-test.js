var tape = require("@redsift/tape-reel")("<div id='test'></div>");
    d3 = require("d3-selection"),
    squares = require("../");
//     svg = require("@redsift/d3-rs-svg"),
tape("html() generates sth with no data squares", function(t) {
    var host = squares.html();
    var el = d3.select('#test');

    // nothing supplied
    el.call(host);
    t.equal(el.selectAll('svg').size(), 1);
    
    // empty datum
    el.datum([]).call(host);
    t.equal(el.selectAll('svg').size(), 1);
    
    t.end();
});

tape("html() generates sth with no data calendar", function(t) {
    var host = squares.html().type('calendar');
    var el = d3.select('#test');

    // nothing supplied
    el.call(host);
    t.equal(el.selectAll('svg').size(), 1);
    
    // empty datum
    el.datum([]).call(host);
    t.equal(el.selectAll('svg').size(), 1);
    
    t.end();
});

tape("html() testing parameters", function(t) {
    var host = squares.html();
    var el = d3.select('#test');
    //last weeks
    var lw = 12;
    host = squares.html().lastWeeks(lw);
    el.datum([]).call(host);
    t.equal(el.selectAll('svg').size(), 1);
    t.equal(el.selectAll('.svg-svg > g').size(), lw+1);

    //next weeks
    var nw = 12;
    host = squares.html().nextWeeks(nw);
    el.datum([]).call(host);
    t.equal(el.selectAll('svg').size(), 1);
    t.equal(el.selectAll('.svg-svg > g').size(), nw+1);

    //both next and last weeks
    host = squares.html().lastWeeks(lw).nextWeeks(nw);
    el.datum([]).call(host);
    t.equal(el.selectAll('svg').size(), 1);
    t.equal(el.selectAll('.svg-svg > g').size(), lw+nw+1);

    // with some data
    var data = [ {date: '2016-05-01', value: 10},
      {date: '2016-05-01', value: 20},
      {date: '2016-05-05', value: 5},
      {date: '2016-06-02', value: 15} ];
    host = squares.html().lastWeeks(lw);
    el.datum(data).call(host);
    t.equal(el.selectAll('svg').size(), 1);
    t.equal(el.selectAll('.svg-svg > g').size(), lw+1);
    
    t.end();
})