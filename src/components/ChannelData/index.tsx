import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef]);

    return (
        <Container>
            <Messages ref={messageRef}>
                <ChannelMessage
                    author="Matheus Amancio"
                    date="11/10/2021"
                    content="Hoje é meu aniversário"
                />

                <ChannelMessage
                    author="Lucas Santos"
                    date="13/10/2021"
                    content={
                        <>
                            <Mention>Matheus Amancio</Mention>, que legal, parabéns atrasado!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;