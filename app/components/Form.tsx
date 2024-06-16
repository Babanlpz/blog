import { useState, useEffect } from "react"
import { db,storage } from "../db/configFirebase"
import { doc, collection, setDoc} from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import Toasts from "./Toasts"
import { useRouter } from "next/navigation"


interface FormData {
  title: string
  description: string
  author: string
}

export default function Form() {


  const [input, setInput] = useState<FormData>({})
  const [showToast, setShowToast] = useState<boolean>(false)
  const [file, setFile] = useState<File | undefined>()
  const [submit , setSubmit] = useState<boolean>(false)

const router = useRouter();

  useEffect(() => {
    if (submit) {
      savePost()
      router.push('/')
    }
  }
, [submit])

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {name, value } = e.target
  setInput ((prevInput) => ({...prevInput, [name]: value}))
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setShowToast(true)
  if (file){
    const storageRef = ref(storage, 'images/'+ file?.name)
    uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (url) => {
        setInput((prevInput) => ({...prevInput, image: url}))
        setSubmit(true)
      })
    })
  
  }
}

const savePost = async () => {
  const docRef = doc(collection(db, "posts"))
  await setDoc(docRef, input)
}

  return (
    <>
    <div className="mt-4">
    {showToast && (
      <div className="absolute top-10 right-10">
        <Toasts msg="Post créer avec succés" closeToast={() => setShowToast(false)}/>
      </div>
    )}
    </div>
    </>
  )
}
