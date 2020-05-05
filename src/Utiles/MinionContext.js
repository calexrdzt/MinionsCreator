import * as React from 'react';

export const MinionContext = React.createContext({ 
    name: '',
    body: '',
    hair:'',
    eyes:'',
    mouth:'',
    cloth:'',

    

    setName: () =>null,
    setBody: () => null,
    setHair: () => null,
    setEyes: () => null,
    setMouth: () => null,
    setCloth: () => null,

    list: [],
    setList: () => null,

    listPrev: [],
    setListPrev: () => null,

    handleFinish: () => null,

})