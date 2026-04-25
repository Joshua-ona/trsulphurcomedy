import levix from './assets/levix.jpg'
import mc from './assets/mc.jpg'
import road from './assets/road.jpg'
import mcc from './assets/mcc.jpg'
import street from './assets/street.jpg'



export default function Gallery() {
  return (
    <div className="section">
      <h2>Media Gallery</h2>

      <div className="grid">
        <div className="card"><img src={levix}  width={250} height={330} alt="heavne"/></div>
       <div className="card"><img src={mc}  width={250} height={330} alt="heavne"/></div>
       <div className="card"><img src={road}  width={250} height={330} alt="heaven"/></div>
       <div className="card"><img src={mcc}  width={250} height={330} alt="heaven"/></div>
       <div className="card"><img src={street}  width={20} height={330} alt="heavne"/></div>
      </div>

      <div className="videos">
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/BwdS2Xc48Z0?si=vQFyf8gw5uR9_dMP" 
        title="YouTube video player" 
        frameborder="0" allow="accelerometer;
         autoplay; clipboard-write;
          encrypted-media; gyroscope;
           picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin" 
           allowfullscreen></iframe>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/AsrW5BhviOQ?si=ODER7bqT6kCQjQcm" 
        title="YouTube video player"
         frameborder="0" allow="accelerometer; 
         autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin"
         allowfullscreen></iframe>
<iframe width="560" height="315" 
src="https://www.youtube.com/embed/I4DCFqhM9XI?si=nTVIEImd9iAUAcN9" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen></iframe>
      </div>
    </div>
  );
}