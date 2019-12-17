import React, { Component } from 'react';
import Player from './videocomp'
import PlayList from './playlist'
import "./Container.css";
class Container extends Component {

    constructor(props) {
        super(props)
        this.state = {
            playlist: [],
            activeVideo: 0,
        };
        this.playNext = this.playNext.bind(this);
        this.setActiveVideo = this.setActiveVideo.bind(this);
    }

    buildList = (data) => {
        this.setState({ playlist: data.playlist })
    }

    playNext = () => {
        let nextId = (this.state.activeVideo + 1) % this.state.playlist.length;
        this.setActiveVideo(nextId);
    }

    setActiveVideo = (index) => {
        this.setState({ activeVideo: index });
    }

    componentDidMount() {
        let url = 'https://s3.amazonaws.com/frankly-news-web/test/playlist.json';
        fetch(url)
            .then(response => response.json())
            .then(this.buildList)
            .catch(error => {
                this.setState({ error });
            })
    }

    render() {
        let currentTitle;

        let currentUrl;
        currentUrl = this.state.playlist.length ? this.state.playlist[this.state.activeVideo].content_url : null;
        currentTitle = this.state.playlist.length ? this.state.playlist[this.state.activeVideo].title : null;
        let vidId;
        vidId = this.state.playlist.length ? this.state.playlist[this.state.activeVideo].id : null;

        return ( <
            div className = { 'vid-c' } >

            {
                currentUrl && < Player currentTitle = { currentTitle }
                currentUrl = { currentUrl }
                playNext = { this.playNext }
                /> } <
                PlayList
                activeIndex = { this.state.activeVideo }
                playlist = { this.state.playlist }
                setVideo = { this.setActiveVideo }
                /> <
                /div>
            );
        }
    }

    export default Container;