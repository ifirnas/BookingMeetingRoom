import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQrData } from '../../reducers/camera-reducer';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

class BookingSuccess extends Component {

    state = {
        url: ''
    }

    componentDidMount() { 
        fetch(this.props.qr).then(res => {
            console.log('res: ', res.url)
            this.setState({ url: res.url })
        })
    }

    render() {
        return (
                <View style={{flex: 1, flexDirection: 'row', width: '100%', height: 400}}>
                    <WebView
                        source={{ uri: this.state.url }}
                        onNavigationStateChange={this.navigationStateChangedHandler}
                        style={{
                            backgroundColor: 'transparent',
                            marginTop: 20,     
                            width: '100%',
                            resizeMode: 'cover',
                            flex: 1                
                        }}
                        scalesPageToFit={true}
                        javaScriptEnabled={true}
                    />
                </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        qr: getQrData(state)
    }
}

export default connect(
    mapStateToProps,
    null
)(BookingSuccess);