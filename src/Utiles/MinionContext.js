import * as React from 'react';

export const MinionContext = React.createContext({ 
    name: '',
    hair:'',
    eyes:'',
    mouth:'',
    cloth:'',

    setName: () =>null,
    setHair: () => null,
    setEyes: () => null,
    setMouth: () => null,
    setCloth: () => null,
})