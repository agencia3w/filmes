import React from 'react';
import WebView from 'react-native-webview';
import {
    BackButton,
    Name,
} from './styles';

import { Feather } from '@expo/vector-icons';

function ModalLink({ link, title, closeModal }) {
    return (
        <>
            <BackButton onPress={closeModal}>
                <Feather name="x" size={35} color="#FFFFFF" />
                <Name numberOfLines={1}>{title}</Name>
            </BackButton>

            <WebView
                source={{ uri: link }}
            />
        </>
    )
}

export default ModalLink;