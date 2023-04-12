export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
};

export const editUser = (id, name) => {
    return {
        type: EDIT_USER,
        payload: { id, name },
    };
};

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id,
    };
};