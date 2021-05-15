import React, { createContext, useState } from 'react';

const MapInfoContext = createContext({
    state: { address: '',
             resturant: '',
             roadAddress: '',
             longitude: '',
             latitude: '',
            },
    actions: {
        setAddress: () => {},
        setResturant: () => {},
        setRoadAddress: () => {},
        setLongitude: () => {},
        setLatitude: () => {},
    }
});

const MapInfoProvider = ({ children }) => {
    const[address, setAddress] = useState('');
    const[resturant, setResturant] = useState('');
    const[roadAddress, setRoadAddress] = useState('');
    const[longitude, setLongitude] = useState('');
    const[latitude, setLatitude] = useState('');

    const value = { 
        state: { address,
            resturant,
            roadAddress,
            longitude,
            latitude },
        actions: { setAddress,
            setResturant,
            setRoadAddress,
            setLongitude,
            setLatitude }
    };
    return (
        <MapInfoContext.Provider value={value}>{children}</MapInfoContext.Provider>
    );

};

const { Consumer: MapInfoConsumer } = MapInfoContext;

export { MapInfoProvider, MapInfoConsumer };

export default MapInfoContext;