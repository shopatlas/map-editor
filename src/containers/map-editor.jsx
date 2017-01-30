const React = require('react');


const MapEditor = React.createClass({

    map: null,
    marker: null,
    infoWindow: null,

    propTypes: {
        name: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            name: "MapEditor"
        };
    },

    getInitialState: function() {
        return {count: this.props.initialCount}
    },

    componentWillMount: function() {
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.addEventListener('load', this.handleLoad);
        script.addEventListener('error', this.handleReject);
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.props.route.googleMapsAPI +"&v=3";
        document.body.appendChild(script);
    },

    componentDidMount: function() {

    },

    handleLoad: function() {
        this.map = this.createMap();
//        this.marker = this.createMarker();
//        this.infoWindow = this.createInfoWindow();
    },

    handleReject: function() {

    },

    createMap: function() {
        const options = {
            minZoom: 1,
            zoom: 2,
            center: new google.maps.LatLng(0, 0)
        };
        return new google.maps.Map(this.refs.map_canvas, options);
    },



    render: function() {
        return (
            <div id="map" ref="map_canvas"></div>
        );
    }

});


module.exports = MapEditor;