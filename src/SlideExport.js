import React, { Component } from 'react';
import { Spectacle, Deck, Text, Slide, Heading, Image,
    Table, TableHeaderItem, TableItem, TableRow, Link, CodePane } from 'spectacle';
import createTheme from "spectacle/lib/themes/default";
import { loadFile } from './Util.js';


const theme = createTheme({
  primary: 'rgb(29, 31, 33)',
  quartenary: '#00ffa1'
});



export class Presentation extends Component {

    constructor() {
        super();
        this.state = {
            promise: '<code>',
            observable: '<code>',
            subscription: '<code>',
            example1: '<code>',
            example2: '<code>',
            subject: '<code>',
            asyncSubject: '<code>',
            replaySubject: '<code>',
            behaviorSubject: '<code>',
            retry: '<code>'
        }

    }

    componentDidMount() {
        this.getFile('promise', 'promise/creation.js');
        this.getFile('observable', 'observable/creation.js');
        this.getFile('subscription', 'observable/subscription.js');
        this.getFile('example1', 'observable/example1.js');
        this.getFile('example2', 'observable/example2.js');
        this.getFile('subject', 'subject/subject.js');
        this.getFile('asyncSubject', 'subject/async-subject.js');
        this.getFile('replaySubject', 'subject/replay-subject.js');
        this.getFile('behaviorSubject', 'subject/behavior-subject.js');
        this.getFile('retry', 'observable/retry.js');
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

                    <Slide>
                        <Heading size={2} caps lineHeight={1} textColor="white">
                            Getting started
                        </Heading>
                    </Slide>
                    

                    <Slide transition={[]}>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            Promise / Future
                        </Heading>
                        <CodePane lang="js" source={this.state.promise}/>
                    </Slide>
                    

                    <Slide transition={[]}>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            Observable
                        </Heading>
                        <CodePane lang="js" source={this.state.observable}/>
                    </Slide>

                    <Slide transition={[]}>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            Subscription
                        </Heading>
                        <CodePane lang="js" source={this.state.subscription}/>
                    </Slide>
                    

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
                    
                    <Slide transition={[]}>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            Example
                        </Heading>
                        <CodePane lang="js" source={this.state.example1}/>
                    </Slide>

                    <Slide>
                        <Heading size={2} caps lineHeight={1} textColor="white">
                            Subscribe to stream
                        </Heading>
                        <br/>
                        <Image width="50%" src="./stream.jpg"></Image>
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
                        <Link target="_blank" href="http://rxmarbles.com/#delay">
                            <Text>DELAY</Text>
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

                    <Slide transition={[]}>
                        <CodePane lang="js" source={this.state.example2}/>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Example: Fetch films with Netflix
                        </Heading>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Example: Netflix
                        </Heading>
                        <Image width="90%" src="./netflix.jpg"></Image>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Some concepts
                        </Heading>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Pure functional 
                        </Heading>
                        {
                        //<Image width="60%" src="./pure_f.jpg"></Image>
                        }
                        <br/>
                        <Text>Avoid  stateful programs, using clean input/output functions over observable streams.</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Laziness 
                        </Heading>
                        <br/>
                        <Text>Only calls to "subscribe" trigger the evaluation (like action on Spark)</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Async error handling 
                        </Heading>
                        <br/>
                        <Text>Traditional try/catch is powerless for errors in asynchronous computations, but ReactiveX is equipped with proper mechanisms for handling errors.</Text>
                         <Image width="100%" src="./retry.png"></Image>
                    </Slide>

                    <Slide transition={[]}>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            Example
                        </Heading>
                        <CodePane lang="js" source={this.state.retry}/>
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
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Simple Subject 
                        </Heading>
                        <br/>
                        <Text>A Subject is a bridge that acts both as an observer and as an Observable</Text>
                    </Slide>

                    <Slide transition={[]}>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            Example
                        </Heading>
                        <CodePane lang="js" source={this.state.subject}/>
                    </Slide>

                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Async Subject 
                        </Heading>
                        <br/>
                        <Text>The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, and only when the execution completes</Text>
                    </Slide>

                    <Slide transition={[]}>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            Example
                        </Heading>
                        <CodePane lang="js" source={this.state.asyncSubject}/>
                    </Slide>


                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Replay Subject 
                        </Heading>
                        <br/>
                        <Text>A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.</Text>
                    </Slide>

                    <Slide transition={[]}>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            Example
                        </Heading>
                        <CodePane lang="js" source={this.state.replaySubject}/>
                    </Slide>


                    <Slide>
                        <Heading size={4}  caps lineHeight={1} textColor="white">
                            Behavior Subject 
                        </Heading>
                        <br/>
                        <Text>Whenever a new Observer subscribes, it will immediately receive the "current value" from the BehaviorSubject.</Text>
                        <Text>BehaviorSubjects are useful for representing "values over time". For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.</Text>
                    </Slide>

                    <Slide transition={[]}>
                        <Heading size={4} caps lineHeight={1} textColor="white">
                            Example
                        </Heading>
                        <CodePane lang="js" source={this.state.behaviorSubject}/>
                    </Slide>

                    <Slide>
                        <Heading size={2}  caps lineHeight={1} textColor="white">
                            TP: CHAT
                        </Heading>
                    </Slide>


                </Deck>
            </Spectacle>
        )
    }

}