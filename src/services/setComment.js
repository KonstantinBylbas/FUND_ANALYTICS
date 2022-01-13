import { getDatabase, ref, set, push } from "firebase/database";


export default function setComment({ name, comment, id }) {
  
    const db = getDatabase();
    const d = new Date();
    return set(ref(db, 'users/' + id), { name, comment, date: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}` });     
}
