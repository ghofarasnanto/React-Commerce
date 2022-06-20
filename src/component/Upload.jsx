import React, { useState } from "react";
// import Alert from '../components/Alert';

export default function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  //eslint-disable-next-line
  const [selectedFile, setSelectedFile] = useState();
  //eslint-disable-next-line
  const [successMsg, setSuccessMsg] = useState("");
  //eslint-disable-next-line
  const [errMsg, setErrMsg] = useState("");
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <>
      {previewSource ? (
        // eslint-disable-next-line
        <img className="img-profile" src={previewSource} />
      ) : (
        <img
          src="https://res.cloudinary.com/drxg5zyks/image/upload/v1655749692/public/assets/img/avatar_k3mptd.png"
          className="img-profile"
          alt="product"
          style={{ height: "300px" }}
        />
      )}
      <label className="btn btn-dark btn-lg btn-block">
        <input
          // id="fileInput"
          // type="file"
          // name="image"
          // onChange={handleFileInputChange}
          // value={fileInputState}
          hidden
        />
        Take a picture
      </label>
      <label className="btn btn-primary btn-lg btn-block">
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          hidden
        />
        Choose from gallery
      </label>
    </>
  );
}
