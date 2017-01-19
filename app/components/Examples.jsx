var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h3>Examples Component</h3>
            <p>Here are a few examples to try out!</p>
            <ol>
                <li>
                    <Link to='/?location=Beijing'>Beijing,China</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio,Brazil</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;
