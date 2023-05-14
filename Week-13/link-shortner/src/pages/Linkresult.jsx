import React, { useEffect, useState } from "react";
import "./LinkResult.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const Linkresult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  console.log("bulu", shortenLink);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(resp.data.result.full_short_link);
    } catch (err) {
      setError(error)
    } finally {
        setLoading(false)
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  if(loading){
    return <div className="load">Loading...</div>
  }
  if(error){
    return <p className="error">Something went wrong...</p>
  }

  return (
    <>
      {shortenLink && (
        <div className="container">
          <div className="result">
            <p>{shortenLink}</p>
            <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
              <button className={copied ? "copied" : ""}>Copy</button>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </>
  );
};

export default Linkresult;
