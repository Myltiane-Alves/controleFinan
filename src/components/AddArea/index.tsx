import * as C from './styles';
import { Item } from '../../types/item';
import { useState } from 'react';

type Props = {
    item: Item
}
export const AddArea = () => {

    return(
        <C.Container >
            <div className="image">➕</div>
            <input 
                type="text"
            
            />
            
        </C.Container>
    )
}