import React, { Component } from 'react';
import './Blog.css';
import { jsPDF } from "jspdf";
import logo from '../Blog/image/atiq.jpeg'


const Blog = () => {
   const pdfGenerate=()=>{
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(logo, "JPEG", 65, 20,500,400)
        doc.addPage()
        doc.text(60, 60,'Description')
        doc.text(100, 60, `This is the blog page there have some importent question with answer. i think 
        these qustion you should be know for your future. there has four diffrernt question. but these question is very easy`)
        doc.save('atiq.pdf')
    }

    return (
        <div>
            <button onClick={pdfGenerate} className='btn btn-outline mt-10 ml-10 p-2 '>Dawnload pdf</button>

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