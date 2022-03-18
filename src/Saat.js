import React from 'react';
import './Saat.css';

class Saat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { zaman: new Date() };
        // this.saatiGuncelle = this.saatiGuncelle.bind(this);
    }

    render() {
        return <div className="Saat">
            {this.state.zaman.toLocaleTimeString()}
        </div>;
    }

    saatiGuncelle() {
        this.setState({ zaman: new Date() });
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.saatiGuncelle(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
}

export default Saat;