"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var Initializer = require('./actions/initializeActions');

Initializer.initApp();

Router.run(routes, function(Handler) {
    "use strict";

    React.render(<Handler />, document.getElementById('app'));

});