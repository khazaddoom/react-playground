import { useState } from "react";
import toast from "react-hot-toast";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const upload = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://20.244.131.105:3000/azureSAS?blob_name=${file.name}`
      );
      const {responseData} = await res.json();

      const formData = new FormData();
      formData.append("file", file!);

      const headers = new Headers();
      headers.append("x-ms-blob-type", "BlockBlob")
      headers.append("Content-Type", file!.type)

      const {ok, status} = await fetch(`${responseData.storageBlob}`,{
        method: "PUT",
        body: formData,
        headers
      })

      if(ok && status == 201) {
        toast.success("File Uploaded")
      }

    } catch (error) {
      toast.error("Something went wrong! check the logs")
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="file" name="image" id="file-image" onChange={handleChange} />
      <input type="button" onClick={upload} value="Upload" />
    </div>
  );
}