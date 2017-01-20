import React, { Component } from 'react';
import { Spectacle, Deck, Text, Slide, Fill, Fit, Layout, Heading, Appear, Image } from 'spectacle';
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
            observable: ''
        }
        this.getFile('promise', 'promise/creation.js');
        this.getFile('observable', 'observable/creation.js');
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

                    <Slide transition={[]}>
                        <Image width="100%" src="./observable.png"></Image>
                    </Slide>

                    <CodeSlide transition={['slide']} lang="js" code={this.state.promise} ranges={[
                        { loc: [0, 31], title: 'Promise' },
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

                    <Slide>
                        <Text>Promises are designed to handle a single response value</Text>
                        <br/>
                        <Text>Observable are designed to handle an <b>infinity</b> of response values</Text>
                    </Slide>

                    <Slide>
                        <Heading size={4} fit caps lineHeight={1} textColor="white">
                            Stream &amp; Functional programming
                        </Heading>
                        <Image src="http://i.giphy.com/5K5ELLZKZfC0g.gif"></Image>
                    </Slide>

                    <CodeSlide transition={['slide']} lang="js" code={code} ranges={[
                        { loc: [ 0, 31], title: 'Reactive programming using rxJSsdfsdf' },
                        { loc: [ 0,  1], note: 'Import the module' },
                        { loc: [ 2,  9], note: 'Setup your presentation' },
                        { loc: [10, 26], note: 'Time to create your first CodeSlide' },
                        { loc: [11, 12], note: 'Props like "transition" get passed through to Slide' },
                        { loc: [12, 13], note: 'Specify a "lang"' },
                        { loc: [13, 14], note: 'Pass in your code as a string' },
                        { loc: [14, 26], note: 'Now to specify some ranges. They are an array of objects' },
                        { loc: [18, 19], note: 'Each one has a "loc" property with a start and an end.' },
                        { loc: [16, 17], title: 'You can also add a "title"' },
                        { loc: [20, 21], note: 'Or even a "note"' },
                        { loc: [ 0, 31], title: 'That\'s all folks!', note: (
                        <span>Git repo here: <a href="https://github.com/thejameskyle/spectacle-code-slide">thejameskyle/spectacle-code-slide</a></span>
                        ) },
                    ]}/>
                </Deck>
            </Spectacle>
        )
    }

}