import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import nodeid from "node-id";
import CheckParams from "../helpers/CheckParams";
import Toggle from "./Toggle";

export default function AddDataForm({ getValues }) {
  const id = nodeid(8);

  const [details, setDetails] = useState({
    link: "",
    imgSrc: "",
    imgAlt: "",
    eventDate: "",
  });

  const [error, setError] = useState({
    show: false,
    errorMsg: "",
  });

  const [checkMKT, setCheckMKT] = useState(true);

  function toggleCheckMKT(x) {
    console.log("form", x);
    setCheckMKT(x);
  }

  function captureValue(e) {
    const value = e.target.value;
    const id = e.target.id;
    setDetails({ ...details, [id]: value });
  }

  function submit(e) {
    e.preventDefault();
    const hasMKTcode = CheckParams(details.link);
    if (!hasMKTcode && checkMKT) {
      return setError({
        show: true,
        errorMsg: "Add MKTcode to link",
      });
    }

    if (details.imgSrc === "")
      return setError({
        show: true,
        errorMsg: "Image Src",
      });
    const secInfo = {
      ...details,
      id,
    };
    console.log(secInfo);
    getValues(secInfo);
    setDetails({
      link: "",
      imgSrc: "",
      imgAlt: "",
      eventDate: "",
    });
    setError({
      show: false,
      errorMsg: ``,
    });
  }

  return (
    <form className="form" onSubmit={submit}>
      <Toggle enabled={checkMKT} toggleCheckMKT={toggleCheckMKT} />
      <TextField
        id="link"
        label="Add link"
        variant="outlined"
        error={error.errorMsg === "Add MKTcode to link"}
        onChange={captureValue}
        value={details.link}
      />
      <TextField
        id="imgSrc"
        label="Image Src"
        variant="outlined"
        className="between-margin "
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
      <TextField
        id="eventDate"
        label="Event Date"
        variant="outlined"
        className="between-margin "
        onChange={captureValue}
        value={details.eventDate}
      />

      {error.show && (
        <div
          className="p-4 mt-5 text-sm text-red-700 bg-red-100 rounded-sm dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">Check the following..</span>
          <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-sm dark:bg-pink-200 dark:text-pink-900 ml-2">
            {error.errorMsg}
          </span>
        </div>
      )}

      <button
        className="px-4 py-4 mt-5 text-sm rounded-sm bg-slate-600 hover:bg-slate-800 text-slate-100"
        type="submit"
      >
        Add Section
      </button>
    </form>
  );
}
