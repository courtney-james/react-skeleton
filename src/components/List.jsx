var React = require('React');
var ListItem = require('./ListItem.jsx');

var employees = [{"id":1,"name": "firstname, lastname"}, {"id":2, "name":"firstname, lastname"}, {"id":3,"name":"firstname, lastname"}];

var List = React.createClass({
    render: function() {
        var listItems = employees.map(function(item) {
            return <ListItem key={item.id} employees={item.name} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;