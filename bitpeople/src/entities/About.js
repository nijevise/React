import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom'

const About = (props) => {
    return(
        <div className="aboutDiv">
            <Header/>
            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore cum similique, neque quas aperiam adipisci nobis aspernatur excepturi, eaque voluptate in quasi obcaecati harum nam repellat inventore dolorem qui?</p>
                <h3>What we do</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore cum similique, neque quas aperiam adipisci nobis aspernatur excepturi, eaque voluptate in quasi obcaecati harum nam repellat inventore dolorem qui?</p>
            </div>
            <Footer />
        </div>
    )
}
export default About 