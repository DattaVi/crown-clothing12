import {initializeApp} from 'firebase/app';
import {getAuth,signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore'
import { signOut,onAuthStateChanged } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDFU4ssVk228oOY3eZDXpYlZ2PYNfAMfso",
    authDomain: "crwn-clothing-db-60f0a.firebaseapp.com",
    projectId: "crwn-clothing-db-60f0a",
    storageBucket: "crwn-clothing-db-60f0a.appspot.com",
    messagingSenderId: "847118255390",
    appId: "1:847118255390:web:ccf1fe43e3bb2323f0b50f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);
  export const db=getFirestore();

export const addCollectionAndDocuments= async (collectionKey,objectsToAdd)=>{
     const collectionRef=collection(db,collectionKey);
      const batch=writeBatch(db);
      objectsToAdd.forEach((object)=>{
        const docRef=doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
      });
      await batch.commit();
      console.log('done')     
}

export const getCategoriesAndDocuments=async()=>{
  const collectionRef=collection(db,'categories');
  const q=query(collectionRef);
  const querySnapshot=await getDocs(q);
  return querySnapshot.docs.map(docSnapshot=>docSnapshot.data());
  // .reduce((acc,docSnapshot)=>{
  //   const {title,items}=docSnapshot.data();
  //   acc[title.toLowerCase()]=items;
  //   return acc;
  // },{});
  // return categoryMap;
}

  export const createUserDocumentFromAuth= async (userAuth)=>{
     const userDocRef=doc(db,'users',userAuth.uid);
     const userSnapshot= await getDoc(userDocRef);
     if(!userSnapshot.exists()){
      const{displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt
        });
      }
      catch(error){
        console.log("error while storing user information",error.message);
      }
     }
     return userDocRef;
  }

  export const CreateUserWithEmailAndPassword= async(email,password)=>{
     if(!email || !password) return;
     return await createUserWithEmailAndPassword(auth,email,password);
  }
  
  export const createUserDocumentFromEmailAndPasswordLogin=async(userAuth,displayName)=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapshot= await getDoc(userDocRef);
    if(!userSnapshot.exists()){
      const{email}=userAuth
      const createdAt=new Date();
      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt
        })
      }
      catch(error){
        console.log(error);
      }
    }
    return userDocRef;
  }

  export const emailAndPasswordSignIn= async (email,password)=>{
   if (!email || !password) return;
   var response="NULL";
   try{
    response= await signInWithEmailAndPassword(auth,email,password);
   }
   catch(error){
    window.alert(error)
    response="Failed to Login";
   }
   return response;
  }

export  const signOutUser=async ()=>{
  await signOut(auth);
}

export const onAuthStateChangedListener=(callback)=>
onAuthStateChanged(auth,callback)

