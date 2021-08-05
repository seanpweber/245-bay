import React, { Component } from 'react';
import ImageService from '../services/ImageService';
// import axios from 'axios';

class ImageDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
    }

    componentDidMount(){
        ImageService.getImages().then( res => {
            this.setState({ images: res.data});
        });
    }

    render () {
        return <div id="image">
            <h1>Images</h1>
            <div>
                {this.state.images.map( image =>
                    <div>
                        <img src={image.image} />
                        <p>{image.title}</p>
                    </div>
                )}
            </div>
        </div>
    }
}