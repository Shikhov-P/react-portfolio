import React from 'react';
import { Grid, Cell, Button} from 'react-mdl';

class Landing extends React.Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}} id={"bg-img"}>
                <div id="image">Image</div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="landing-banner">
                            <h1>Hello! My name is Pаvеl Shikhоv and I am a Web Programmer</h1>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
