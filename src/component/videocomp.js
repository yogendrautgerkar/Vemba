import React, { PureComponent } from 'react';
import 'react-html5video/dist/styles.css';
class videocomp extends PureComponent {
    constructor(props) {
        super(props)

    }
    playNext = () => {
        this.props.playNext();
        console.log('heloo');

    }
    getVideoView = (url) => {
        return ( <
            video width = { '768px' }
            key = { url + 'vid' }
            muted autoPlay controls = {
                ['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen'] }
            onEnded = { this.playNext } >
            <
            source src = { url }
            type = "video/mp4" / >

            <
            /video >
        );
    }
    getVideoTitle = (title) => {
        console.log("title2");
    }
    render() {
        const url = this.props.currentUrl;
        const key = this.props.vidId;
        console.log('url...', url);
        const title = this.props;
        console.log('title...', title);
        return ( <
            > { this.getVideoView(url) } <
            p > { this.props.currentTitle } < /p> <
            />

        );
    }
}

export default videocomp