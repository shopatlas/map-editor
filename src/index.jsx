require('bootstrap/dist/css/bootstrap.css');

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

const MapEditor = require('./containers/map-editor.jsx');


ReactDOM.render(
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={MapEditor} googleMapsAPI={process.env.GOOGLE_MAPS_API_KEY} />
    </ReactRouter.Router>,
    document.getElementById('shopatlas')
);