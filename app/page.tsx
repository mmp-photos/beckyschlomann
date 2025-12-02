import Image from "next/image";
import Becky from "../public/images/becky.jpg"

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className= "col-md-8 offset-2">
          <h1>Becky Schlomann</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-2 padding-0">
          <Image 
            src={Becky} // Pass the imported image object directly
            alt="Becky Schlomann"
            className="center width-1"
          />
        </div>
        <div className="col-md-4">
          <p>Becky <span className="italic">(she/her)</span> is an emerging playwright and longtime director, actor, and k-16 theatre teacher. BA in theatre: Knox College; MFA in Drama and Theatre for Youth: U.Texas-Austin. Becky lives in Indianapolis. She's a member of the Dramatists Guild and serves on the Steering Committee of the Indiana Playwrights Circle, where her teaching focuses on translating the tools of stagecraft for writers.</p>
        </div>
      </div>
    </div>
  );
}
