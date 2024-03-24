import { Component, PropsWithChildren } from 'react';
import './App.css';

export class App extends Component {
    constructor(props: PropsWithChildren)
    {
        super(props);
    }

    render() {
        return(
            <>
                <p>This is an example text from App.tsx "!!" snippet</p>
            </>
        );
    };
};