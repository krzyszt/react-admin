

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler) {
    "use strict";

    React.render(<Handler />, document.getElementById('app'));

});