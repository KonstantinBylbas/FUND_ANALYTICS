
import { getDatabase, ref, onValue } from "firebase/database";

export default function getComments() {
    const db = getDatabase();

    return new Promise((res, req) => {
        const starCountRef = ref(db, '/users/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            data ? res(data) : req();
        });
    })
}