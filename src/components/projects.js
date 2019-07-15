import React from 'react';
import { Grid, Cell, Tabs, Tab, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        switch (this.state.activeTab) {
            case 0:
                return(
                    <div className={'projects-grid'}>
                        <Card shadow={3} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com">
                                        Get Started
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>

                        <Card shadow={3} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com">
                                        Get Started
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>

                        <Card shadow={3} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', maxWidth: '100%', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com">
                                        Get Started
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                );
            case 1:
                return (
                    <div className="projects-grid">
                        <Card shadow={3} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://plainjs.com/static/img/logo_640.png) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com">
                                        Get Started
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                );
            case 2:
                return (
                    <div className="projects-grid">
                        <Card shadow={3} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.abeautifulsite.net/uploads/2016/04/nodejs.png?width=600&key=e29b3acd7da48dbe62199ba284591dc6e8abd8cb9ce286f5cf89b53a494a9b39) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com">
                                        Get Started
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                );

        }

    }

    render() {
        return(
            <div>
                <Tabs className={'tabs'} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Plain JS</Tab>
                    <Tab>Node.JS</Tab>
                </Tabs>

                <Grid className="grid-container">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

                {/*<div className="projects">{this.toggleCategories()}</div>*/}


            </div>
        )
    }
}




export default Projects;
