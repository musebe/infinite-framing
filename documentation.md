### Next js Infinite frame


## Introduction

This article demonstrates Nextjs framework can be used to generate a rich css and HTML infinite frame.

## Codesandbox

Check the sandbox demo on  [Codesandbox](/).

<CodeSandbox
title="webcamtext"
id=" "
/>

Find github repo [here](/).

## Prerequisites

Entry-level javascript and React/Nextjs knowledge.

## Setting Up the Sample Project


In your frame, create a new nextjs app: `npx create-next-app infiniteframe`.
Head to your root directory `cd infinite frame`
 

We will begin by setting up [Cloudinary](https://cloudinary.com/?ap=em) in the backend.  

Create or log into your cloudinary account through this [link](https://cloudinary.com/console). Cloudinary will provide you with a dashboard containing environment variables to integrate into your project.

Start by including `cloudinary` in your project dependencies `npm install cloudinary`.

Create a file named `.env.local` in your root directory and paste the following code.

```
".env.local"


CLOUDINARY_CLOUD_NAME =

CLOUDINARY_API_KEY =

CLOUDINARY_API_SECRET =
```
Fill your environment variables from the Cloudinary dashboard and restart your project: `npm run dev`.

In the `pages/api` folder, create a new file named `upload.js` and configure the cloudinary environment keys and libraries from `.env.local` directory.

```
var cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
```

Below the code above, add a handler function to execute the POST request. The function will receive media file data and post it to the Cloudinary website. It then captures the media file's Cloudinary link and sends it back as a response.

```
"pages/api/upload.js"


export default async function handler(req, res) {
    if (req.method === "POST") {
        let url = ""
        try {
            let fileStr = req.body.data;
            const uploadedResponse = await cloudinary.uploader.upload_large(
                fileStr,
                {
                    resource_type: "video",
                    chunk_size: 6000000,
                }
            );
            url = uploadedResponse.url
        } catch (error) {
            res.status(500).json({ error: "Something wrong" });
        }

        res.status(200).json({data: url});
    }
}
```

We can now create our frame.

Head to your home component in the `pages/index` directory and add the following to your return statement
```

"pages/index"


<div class="container">
  <div class="frame"></div>
</div>
```

Add the following to your `styles/global.css`
```
"styles/global.css"


.container {
  width:100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.frame {
  width: 900px;
  height: 900px;
  position: absolute;
  border-radius: 50px;
  border: 5px #087be6 solid;
}
```

We have created a frame width and height of 900px. Set the position to absolute and a border-radius of 50px.

![frame](https://res.cloudinary.com/dogjmmett/image/upload/v1651798008/frame_fkodtc.png "frame")

Change the container background and add the following code to the frame:

```
"styles/global.css"


.container {
  ...
  background: linear-gradient(90deg, rgba(0,41,69,1) 6%, rgb(53, 0, 56) 29%, rgba(7,33,71,1) 84%);
}

.frame {
...
  box-shadow: 
  0px 0px 20px #00ccff,
  inset 0px 0px 20px #00ccff,
  0px 0px 60px #ff00c8,
  inset 0px 0px 60px #ff00c8;
}
 
```
![coloredFrame](https://res.cloudinary.com/dogjmmett/image/upload/v1651798203/colorefFrame_xzqy0h.png "coloredFrame")

Add more frames to the container, as many as you like.

```
"pages/index"


    <div className="container">
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
```

Now add the following to your `styles/global.css` directory

```
.frame:nth-child(1) {
  transform: rotate(40deg) translateY(0px) translateZ(0px);
  opacity: 1.00;
  animation-delay: 0.1s;
}

.frame:nth-child(2) {
  transform: rotate(40deg) translateY(50px) translateZ(-10px);
  opacity: 0.9;
  animation-delay: 0.3s;
}

.frame:nth-child(3) {
  transform: rotate(40deg) translateY(100px) translateZ(-20px);
  opacity: 0.85;
  animation-delay: 0.5s;
}

.frame:nth-child(4) {
  transform: rotate(40deg) translateY(150px) translateZ(-30px);
  opacity: 0.70;
  animation-delay: 0.7s;
}

.frame:nth-child(5) {
  transform: rotate(40deg) translateY(200px) translateZ(-40px);
  opacity: 0.65;
  animation-delay: 0.9s;
}

.frame:nth-child(6) {
  transform: rotate(40deg) translateY(250px) translateZ(-50px);
  opacity: 0.50;
  animation-delay: 1.1s;
}

.frame:nth-child(7) {
  transform: rotate(40deg) translateY(300px) translateZ(-60px);
  opacity: 0.40;
  animation-delay: 1.3s;
}

.frame:nth-child(8) {
  transform: rotate(40deg) translateY(350px) translateZ(-70px);
  opacity: 0.35;
  animation-delay: 1.5s;
}

.frame:nth-child(9) {
  transform: rotate(40deg) translateY(400px) translateZ(-80px);
  opacity: 0.30;
  animation-delay: 1.7s;
}

.frame:nth-child(10) {
  transform: rotate(40deg) translateY(450px) translateZ(-90px);
  opacity: 0.25;
  animation-delay: 1.9s;
}

.frame:nth-child(11) {
  transform: rotate(40deg) translateY(500px) translateZ(-100px);
  opacity: 0.20;
  animation-delay: 2.1s;
}

.frame:nth-child(12) {
  transform: rotate(40deg) translateY(550px) translateZ(-110px);
  opacity: 0.15;
  animation-delay: 2.3s;
}

.frame:nth-child(13) {
  transform: rotate(40deg) translateY(600px) translateZ(-120px);
  opacity: 0.1;
  animation-delay: 2.5s;
}

.frame:nth-child(14) {
  transform: rotate(40deg) translateY(650px) translateZ(-130px);
  opacity: 0.5;
  animation-delay: 2.7s;
}

.frame:nth-child(15) {
  transform: rotate(40deg) translateY(700px) translateZ(-140px);
  opacity: 0.1;
  animation-delay: 2.9s;
}
```

Here is the result:

![keyFramed](https://res.cloudinary.com/dogjmmett/image/upload/v1651798751/keyframed_pnmbgp.png "keyFramed")

Let's make it look better. Set the perspective to be rendered as 2D of 50px and also increase the brightness and contrast of the shadow for aesthetic.

```
.container {
...
  perspective: 50px;
}
.frame {
...
  filter:brightness(1.5) contrast(3);
}
```
The result:

![perspective](https://res.cloudinary.com/dogjmmett/image/upload/v1651799080/perspective_fs7exx.png "keyFramed")

Finally, add a glowing and zooming animation. Use key frames toanimate the frames' briightness and perspective and container perspective.

```
@keyframes breathing {
  0% {filter: brightness(1.5) contrast(3);}
  50% {filter: brightness(1.1) contrast(2);}
  100% {filter: brightness(1.5) contrast(3);}
}
@keyframes zooming {
  0% {perspective: 45px;}
  50% {perspective: 50px;}
  100% {perspective: 45px;}
}
```

Ease the trick by gradualy increasing animation delay in each of them like below:

```
"styles/global.css"


.frame:nth-child(1) {
  transform: rotate(40deg) translateY(0px) translateZ(0px);
  opacity: 1.00;
  animation-delay: 0.1s;
}

.frame:nth-child(2) {
  transform: rotate(40deg) translateY(50px) translateZ(-10px);
  opacity: 0.9;
  animation-delay: 0.3s;
}

.frame:nth-child(3) {
  transform: rotate(40deg) translateY(100px) translateZ(-20px);
  opacity: 0.85;
  animation-delay: 0.5s;
}

.frame:nth-child(4) {
  transform: rotate(40deg) translateY(150px) translateZ(-30px);
  opacity: 0.70;
  animation-delay: 0.7s;
}

```

With the animation complete, we can now capture the frame at any point and upload the caption to Cloudinary. Ensure to go through the article to enjoy the experience.