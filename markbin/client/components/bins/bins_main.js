import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../import/collections/bins';
import BinsEditor from './bins_editor';

class BinsMain extends Component {
    render() {
        return (
            <div>
                <BinsEditor bins={this.props.bin} />
            </div>
        );
    }
}

export default createContainer((props) => {
    const { binId } = props.params;
    Meteor.subscribe('bins');

    return { bin: Bins.findOne(binId) };
}, BinsMain);