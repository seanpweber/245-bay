import React, { Component } from 'react';
import axios from 'axios';

export default class ReactUploadImage extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form action="/images" method="post" encType="multipart/form-data">
                        <h3>React File Upload</h3>
                        <div className="form-group">
                            <input type="file" name="image"/>
                            <input type="title" name="title" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}