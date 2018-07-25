import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* icon component */} 
                {/* arrow component */} 
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed tincidunt metus, at semper tortor. Aenean sed suscipit mauris. Vivamus tristique vulputate tristique. Cras sodales enim in metus tincidunt sagittis a id ante</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;