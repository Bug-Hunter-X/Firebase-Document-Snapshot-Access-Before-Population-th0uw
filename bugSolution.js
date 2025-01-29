The solution involves using async/await to ensure the data is loaded before accessing it.  This prevents the race condition where data access happens before population is complete.

```javascript
import { doc, getDoc, getFirestore } from "firebase/firestore";
// Initialize Firebase (replace with your configuration)
const db = getFirestore();

async function getDocumentData(docId) {
  try {
    const docRef = doc(db, "yourCollection", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null; // Handle cases where document doesn't exist
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return null; // Handle errors during document retrieval
  }
}

getDocumentData("yourDocId").then(data => {
  if (data) {
    console.log("Document data:", data);
  }
});
```