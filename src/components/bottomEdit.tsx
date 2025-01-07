import React from 'react';
import ModalEdit from './modalEdit';
export const BottomEdit = () => {
    return (
        <div className="bottom-edit">
            <button className="bottom-edit__button bottom-edit__button--save bg-yellow-600 p-2 rounded-lg" onClick={() => {ModalEdit()}}>Save</button>

        </div>
    );
}

export default BottomEdit;