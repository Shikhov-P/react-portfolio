import React from 'react';
import {Grid, Cell} from 'react-mdl';
import DisplayArray from './DisplayArray';

class Resume extends React.Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className={'resume-grid'}>
                    <Cell col={4} className={'resume-left-col'}>
                        <h2>Pаvеl Shikhоv</h2>
                        <h4>Web Programmer from Saint Petersburg</h4>
                        <p>someone@example.com</p>
                        <img src="./img/logo.png" alt="logo"/>
                    </Cell>

                    <Cell col={8} className={'resume-right-col'}>

                    <h3>My chief traits</h3>
                    <Grid>
                        <Cell col={4}>
                            <h4>Hard skills</h4>
                            <ul>
                                <DisplayArray array={[
                                    'Good grasp of algorithms',
                                    'Sound knowledge of JS, HTML and CSS',
                                    'Familiarity with React',
                                    'Basic back end programming experience (Go, Node.JS)',
                                    'Good knowledge of Python',
                                    'Development experience with JetBrains IDEs and Linux terminal',
                                    'Working knowledge of git, JIRA and Jenkins'
                                ]}/>
                            </ul>
                        </Cell>

                        <Cell col={4}>
                            <h4>My work ethic</h4>
                            <DisplayArray array={[
                                'Always look forward to learning new technologies and concepts',
                                'Be open to feedback and be eager to improve',
                                'Try to do my best to come up with a creative solution',
                                'Feel comfortable working alone and in a team',
                                'Ask questions',
                                'Do my best to provide assistance'
                            ]}/>
                        </Cell>

                        <Cell col={4}>
                            <h4>Soft skills</h4>
                            <DisplayArray array={[
                                'Advanced level of the English language',
                                'Persistence',
                                'Emotional intelligence',
                                'Eagerness to work for the common well-being',
                                'Critical thinking',
                            ]}/>
                        </Cell>
                    </Grid>

                    <h3>Work Experience</h3>
                        <Grid>
                            <Cell col={6} className={'experience-column'}>
                                <p><strong>Position: </strong> Automation QA Engineer</p>
                                <p><strong>Company: </strong>DINS</p>
                                <p><strong>Period: </strong>January 2018 - May 2018</p>
                                <p><strong>Accomplishments:</strong></p>
                                <DisplayArray array={[
                                    'Created a script to classify all used tests',
                                    'Wrote automated tests for an IP system',
                                    'Participated in an agile work process in a team of 6',
                                    'Updated a number of legacy tests to meet the new requirements',
                                    'Fixed issues found at a code review',
                                    'Helped to create a knowledge base for test scenarios'
                                ]}/>
                            </Cell>

                            <Cell col={6} className={'experience-column'}>
                                <p><strong>Position: </strong> Support specialist</p>
                                <p><strong>Company: </strong>Positive Technologies</p>
                                <p><strong>Period: </strong>December 2018 - July 2019</p>
                                <p><strong>Accomplishments:</strong></p>
                                <DisplayArray array={[
                                    'Consulted English- and Russian-speaking clients over the phone regarding company\'s products',
                                    'Troubleshooted customer\'s problems',
                                    'Reviewed logs to locate bugs and inproper software functioning',
                                    'Reproduces customer\'s situations to give feedback',
                                ]}/>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
