import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
// import {Link} from 'react-router-dom'
import { View, Image } from 'react';
import { limitTitle } from './Text-limit'
import "./Container.css"
export default class playlist extends Component {
   

    render() {
        console.log('render')
        return (
            <div className="playlist">
                {this.props.playlist.length > 0 &&
                    this.props.playlist.map((item, index) => (
                        <div key={'pl_' + index}
                        onClick={(event)=>this.props.setVideo(index)}
                        >

                            <img
                                className="port-image"
                                alt=""
                                src={item.image_url}
                                style={{ width: "140px", height: "150px", objectFit: "cover", padding: "5px"}}
                            />
                            {/* <p>{limitTitle(this.props.title, 20)}</p> */}
                            <p className="title">{item.title}</p>
                        </div>
                    ))
                }

            </div>
        )
    }
}

