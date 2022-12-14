import React from "react";
import Header from './Header'
import WorkSection from "./WorkSection";

const CVPreview = (props) => {
    return (
        <div style={{border: "solid black 2px", width: "800px", height: "1000px", padding: "1%"}}>
            <Header personal={props.info.personal}/>
            <WorkSection title="Work Experience" info={props.info.exps.work}/>
            <WorkSection title="Education" info={props.info.exps.edu}/>
        </div>
    )
}

// class CVPreview extends Component {
    
//     constructor(props) {
//         super();
//     }

//     render() {
//         return (
//             <div style={{border: "solid black 2px", width: "800px", height: "1000px", padding: "1%"}}>
//                 <Header personal={this.props.info.personal}/>
//                 <WorkSection title="Work Experience" info={this.props.info.exps.work}/>
//                 <WorkSection title="Education" info={this.props.info.exps.edu}/>
//             </div>
//         )
//     }
// }

export default CVPreview