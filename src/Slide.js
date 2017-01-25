import React, { Component } from 'react';
import { Spectacle, Deck, Text, Slide, Fill, Fit, Layout, Heading, Appear, Image,
    Table, TableHeaderItem, TableItem, TableRow, Link } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from "spectacle/lib/themes/default";
import code from './App.js'
import { loadFile } from './Util.js';


const theme = createTheme({
  primary: 'rgb(29, 31, 33)',
  quartenary: '#00ffa1'
});



export class Presentation extends Component {

    constructor() {
        super();
        this.state = {
            promise: '',
            observable: '',
            subscription: '',
            example1: ''
        }
        this.getFile('promise', 'promise/creation.js');
        this.getFile('observable', 'observable/creation.js');
        this.getFile('subscription', 'observable/subscription.js');
        this.getFile('example1', 'observable/example1.js');
    }

    getFile(state, url) {
        const newState = {};
        loadFile(url).subscribe((x) => {
            newState[state] = x;
            this.setState(newState);
        });
    }

    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={[]} transitionDuration={500} progress="number">
                    <Slide transition={[]}>
                        <Heading size={1} fit caps lineHeight={1} textColor="white">
                            Reactive programming using rxJS
                        </Heading>
                    </Slide>

                    <Slide transition={[]}>
                        <Heading size={4} fit caps lineHeight={1} textColor="white">
                            Observer &amp; Observable
                        </Heading>
                    </Slide>

                    <Slide>
                        <Table>
                        <thead>
                            <TableRow>
                                <TableHeaderItem></TableHeaderItem>
                                <TableHeaderItem>Single</TableHeaderItem>
                                <TableHeaderItem>Multiple</TableHeaderItem>
                            </TableRow>
                        </thead>
                        <tbody>
                            <TableRow>
                                <TableHeaderItem>Pull</TableHeaderItem>
                                <TableItem>Function</TableItem>
                                <TableItem>Iterator</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableHeaderItem>Push</TableHeaderItem>
                                <TableItem>Promise</TableItem>
                                <TableItem>Observable</TableItem>
                            </TableRow>
                        </tbody>
                            </Table>
                    </Slide>

                    <Slide>
                        <Text>Promises are designed to handle a single response value</Text>
                        <br/>
                        <Text>Observable are designed to handle an <b>infinity</b> of response values</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            We use ReactiveX
                        </Heading>
                        <Image width="100%" src="./use.png"></Image>
                        <Text>Supported by Java, JavaScript, C#, Scala, Python, etc ...</Text>
                    </Slide>

                    <Slide transition={[]}>
                        <Heading size={2} caps lineHeight={1} textColor="white">
                            Getting started
                        </Heading>
                    </Slide>

                    <CodeSlide transition={['slide']} lang="js" code={this.state.promise} ranges={[
                        { loc: [0, 31], title: 'Promise / Future' },
                        { loc: [0, 1] },
                        { loc: [1, 2] },
                        { loc: [2, 3] },
                        { loc: [4, 6] },
                        { loc: [6, 7] }
                    ]}/>

                    <CodeSlide transition={['slide']} lang="js" code={this.state.observable} ranges={[
                        { loc: [0, 31], title: 'Observable' },
                        { loc: [0, 1] },
                        { loc: [2, 4] },
                        { loc: [4, 5] },
                        { loc: [6, 8] },
                        { loc: [8, 9] }
                    ]}/>

                    <CodeSlide transition={[]} lang="js" code={this.state.subscription} ranges={[
                        { loc: [0, 31], title: 'Subscription' },
                        { loc: [0, 1] },
                        { loc: [2, 4] },
                        { loc: [4, 5] },
                        { loc: [6, 8] }
                    ]}/>

                    <Slide>
                        <Heading size={4} fit caps lineHeight={1} textColor="white">
                            Stream &amp; Functional programming
                        </Heading>
                        <Image src="http://i.giphy.com/5K5ELLZKZfC0g.gif"></Image>
                    </Slide>

                    <Slide>
                        <Heading size={2} caps lineHeight={1} textColor="white">
                            Operators
                        </Heading>
                    </Slide>

                    <Slide>
                        <Image width="100%" src="./observable.png"></Image>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#map">
                            <Text>MAP</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#filter">
                            <Text>FILTER</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#reduce">
                            <Text>REDUCE</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#find">
                            <Text>FIND</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#max">
                            <Text>MAX</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#sum">
                            <Text>SUM</Text>
                        </Link>
                    </Slide>

                    <CodeSlide transition={[]} lang="js" code={this.state.example1} ranges={[
                        { loc: [0, 31], title: 'Example' },
                        { loc: [0, 1] },
                        { loc: [2, 4] },
                        { loc: [4, 5] },
                        { loc: [6, 8] }
                    ]}/>

                    <Slide>
                        <Heading size={2} caps lineHeight={1} textColor="white">
                            Subscribe to stream
                        </Heading>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#delay">
                            <Text>DELAY</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#scan">
                            <Text>SCAN</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#debounce">
                            <Text>DEBOUNCE</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Text>BUFFER</Text>
                        <Image width="100%" src="./buffer.png"></Image>
                    </Slide>

                    <Slide>
                        <Heading size={2} caps lineHeight={1} textColor="white">
                            Combine observable
                        </Heading>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#merge">
                            <Text>MERGE</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#concat">
                            <Text>CONCAT</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Operator
                        </Heading>
                        <br/>
                        <Link target="_blank" href="http://rxmarbles.com/#zip">
                            <Text>ZIP</Text>
                        </Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Example: Netflix
                        </Heading>
                        <Image width="100%" src="./netflix.jpg"></Image>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Concepts
                        </Heading>
                        <Image width="100%" src="./concepts.png"></Image>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Pure functional 
                        </Heading>
                        <br/>
                        <Text>Avoid  stateful programs, using clean input/output functions over observable streams.</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Async error handling 
                        </Heading>
                        <br/>
                        <Text>Traditional try/catch is powerless for errors in asynchronous computations, but ReactiveX is equipped with proper mechanisms for handling errors.</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Concurrency made easy 
                        </Heading>
                        <br/>
                        <Text>Observables allow to abstract away low-level threading, synchronization, and concurrency issues.</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Subjects 
                        </Heading>
                        <br/>
                        <Text>A Subject is a bridge that acts both as an observer and as an Observable</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Async Subject 
                        </Heading>
                        <br/>
                        <Text>The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, and only when the execution completes</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Replay Subject 
                        </Heading>
                        <br/>
                        <Text>A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Behavior Subject 
                        </Heading>
                        <br/>
                        <Text>Whenever a new Observer subscribes, it will immediately receive the "current value" from the BehaviorSubject.</Text>
                        <Text>BehaviorSubjects are useful for representing "values over time". For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.</Text>
                    </Slide>


                </Deck>
            </Spectacle>
        )
    }

}