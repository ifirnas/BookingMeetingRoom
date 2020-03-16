import React, { Component } from "react";
import { RNCamera } from 'react-native-camera';
import styles from '../../styles/global'
import { setQrDataService } from "../../services/cameraService";
import { connect } from "react-redux";
import { getQrData } from "../../reducers/camera-reducer";

class Camera extends Component {

    render() {

        return (
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={this.props.qr ? RNCamera.Constants.FlashMode.off : RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                    this.props.setQr(barcodes);
                    if (barcodes) {
                        this.props.navigation.navigate('success')
                        this.camera.stopRecording()                        
                    }
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        qr: getQrData(state)
    }
}

const mapDispatchToProps = (dispatch) => {    
    return {
        setQr: (data) => dispatch(setQrDataService(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Camera);
