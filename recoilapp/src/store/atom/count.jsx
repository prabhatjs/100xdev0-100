import {atom, selector} from "recoil"

const countAtom=atom({
     key:"countAtom",
     default:0
});

export const evenSelector=selector({
    key:"Evenselector",
    get:({get})=>{
        const count=get(countAtom);
        return count%2==0;
    }
})

export default countAtom;
