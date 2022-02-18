import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import nodeid from "node-id";

export default function AddDataForm({ getValues }) {
  const id = nodeid(8);

  const [details, setDetails] = useState({
    link: "",
    imgSrc: "",
    imgAlt: "",
  });

  const [error, setError] = useState({
    show: false,
    errorMsg: "",
  });

  function captureValue(e) {
    const value = e.target.value;
    const id = e.target.id;
    setDetails({ ...details, [id]: value });
  }

  function submit(e) {
    e.preventDefault();
    console.log(id);
    if (details.imgSrc === "" || details.link === "")
      return setError({
        show: true,
        errorMsg: `${details.imgSrc === "" ? "Add img src" : "Add Link"}`,
      });
    const secInfo = {
      ...details,
      id,
    };
    getValues(secInfo);
    setDetails({
      link: "",
      imgSrc: "",
      imgAlt: "",
    });
    setError({
      show: false,
      errorMsg: ``,
    });
  }

  return (
    <form className="form" onSubmit={submit}>
      <TextField
        id="link"
        label="Add link"
        variant="outlined"
        onChange={captureValue}
        value={details.link}
      />
      <TextField
        id="imgSrc"
        label="Image Src"
        variant="outlined"
        className="between-margin"
        onChange={captureValue}
        value={details.imgSrc}
      />
      <TextField
        id="imgAlt"
        label="Image Alt"
        variant="outlined"
        onChange={captureValue}
        value={details.imgAlt}
      />
      {error.show && <p>{error.errorMsg}</p>}
      <Button
        variant="contained"
        className="btn-mrg"
        size="large"
        type="submit"
      >
        Add Section
      </Button>
    </form>
  );
}
