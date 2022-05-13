import html2canvas from "html2canvas";
import { useState, useRef } from "react";
import { useScreenshot } from 'use-react-screenshot'

export default function Home() {
  const [link, setLink] = useState();

  const [userprofile, takeScreenshot] = useScreenshot();

  const captionRef = useRef();

  
  const captionHandler = async () => {//capture the frame for cloudinary upload
    console.log(captionRef.current)
    await takeScreenshot(captionRef.current).then(function(caption) {
      try {
        console.log(caption)
        fetch('/api/upload', {
          method: 'POST',
          body: JSON.stringify({ data: caption }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .then((data) => {
            setLink(data.data);
          });
      } catch (error) {
        console.error(error);
      }
    })
  }
  return (
    <>
      <div className="navbar">
        <h2>Nextjs Infinity Frame</h2>
        {link ? <a href={link}><h3>frame caption link</h3></a> : ""}
        <button variant="contained" color="primary" onClick={captionHandler}>Capture Frame</button>
      </div>
      <div className="container" ref={captionRef}>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
      </div>
    </>
  )
}
