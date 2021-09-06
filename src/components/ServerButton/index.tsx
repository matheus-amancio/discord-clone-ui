import React from 'react';

import Logo from '../../assets/Logo.svg'

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
};

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
        >
            {isHome && <img src={Logo} alt="Rocketseat" />}
        </Button>
    )
};

export default ServerButton;