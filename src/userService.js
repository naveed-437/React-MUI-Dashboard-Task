import {http} from './url';

export const getUsers =  async () => {
    let response =  await http.get("users");
    return response.data;
}

export const deleteUser = async (id)  => {
     await http.delete("users/"+id);
}

export const addUserDb = async (formData) => {
    await http.post("users",formData);
}