import Card from "./Card";
import street from './assets/street.jpg'
import award from './assets/award.jpg'
import comedy from './assets/comedy.jpg'
export default function Programs() {
  return (
    <div className="section">
      <h2>Programs</h2>

      <div className="grid">
        <Card
          title="Kayemba School of Evangelism"
          description="Training people to win souls."
        />
        <img src={street} alt="preach" width={300} />

        <Card
          title="Tr Sulpur Comedy Club"
          description="Supporting and training young comedians."
        />
                      <img src={award} alt="preach" width={300} />


        <Card
          title="Missions"
          description="We carry out soul winning across most regions of Uganda bringing many to Christ"
        />    
         <img src={comedy} alt="preach" width={300} />

      </div>
    </div>
  );
}