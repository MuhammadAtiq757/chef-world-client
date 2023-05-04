import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl blog-card">
                <div className="card-body blog-body">
                    <h2 className="card-title">Tell us the differences between uncontrolled
                        and controlled components.</h2>
                    <p>In software development, the terms "controlled" and
                        "uncontrolled" components typically refer to different ways of
                        managing user input in a user interface.
                        depends on the state of another.</p>

                </div>
                <div className="card-body blog-body">
                    <h2 className="card-title">Tell us the difference between nodejs and express js.</h2>
                    <p>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is
                        a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>

                </div>
                <div className="card-body blog-body">
                    <h2 className="card-title">How to validate React props using PropTypes</h2>
                    <p>React PropTypes validators
                        PropTypes.any : The prop can be of any data type.
                        PropTypes.bool : The prop should be a Boolean.
                        PropTypes.number : The prop should be a number.
                        </p>

                </div>
                <div className="card-body blog-body">
                    <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
                    <p>Custom React JS hooks offer reusability as when a 
                        custom hook is created, and again while rendering the whole code.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;