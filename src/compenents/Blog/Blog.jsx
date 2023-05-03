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
                        An uncontrolled component is a component in which the value of
                        the input element is managed by the browser, rather than by the
                        React component. This means that when the user types into the
                        input field, the browser directly updates the value in the DOM,
                        without informing the React component of the change. This can
                        lead to unexpected behavior, especially in more complex
                        forms where the state of one input field depends on the state of another.</p>
                  
                </div>
                <div className="card-body blog-body">
                    <h2 className="card-title">Tell us the differences between uncontrolled
                        and controlled components.</h2>
                    <p>In software development, the terms "controlled" and
                        "uncontrolled" components typically refer to different ways of
                        managing user input in a user interface.
                        An uncontrolled component is a component in which the value of
                        the input element is managed by the browser, rather than by the
                        React component. This means that when the user types into the
                        input field, the browser directly updates the value in the DOM,
                        without informing the React component of the change. This can
                        lead to unexpected behavior, especially in more complex
                        forms where the state of one input field depends on the state of another.</p>
                  
                </div>
                <div className="card-body blog-body">
                    <h2 className="card-title">Tell us the differences between uncontrolled
                        and controlled components.</h2>
                    <p>In software development, the terms "controlled" and
                        "uncontrolled" components typically refer to different ways of
                        managing user input in a user interface.
                        An uncontrolled component is a component in which the value of
                        the input element is managed by the browser, rather than by the
                        React component. This means that when the user types into the
                        input field, the browser directly updates the value in the DOM,
                        without informing the React component of the change. This can
                        lead to unexpected behavior, especially in more complex
                        forms where the state of one input field depends on the state of another.</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Blog;