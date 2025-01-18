import React from "react";

function ProjectWeb() {
  return (
    <>
      <div className="project-item left">
        <img src="https://picsum.photos/101" alt="Project 1" />
        <div className="project-text">
          <h5>Web 1</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            egestas tortor nec mauris mollis, dapibus tempor risus lobortis.
          </p>
          <div className="tags">
            <span>Cubilia</span>
            <span>Cubilia</span>
            <span>Cubilia</span>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="project-item right">
        <div className="project-text">
          <h5>Web 2</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            egestas tortor nec mauris mollis, dapibus tempor risus lobortis.
          </p>
          <div className="tags">
            <span>Cubilia</span>
            <span>Cubilia</span>
            <span>Cubilia</span>
          </div>
        </div>
        <img src="https://picsum.photos/101" alt="Project 2" />
      </div>
      <div className="separator"></div>

      <div className="project-item left">
        <img src="https://picsum.photos/101" alt="Project 3" />
        <div className="project-text">
          <h5>Web 3</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            egestas tortor nec mauris mollis, dapibus tempor risus lobortis.
          </p>
          <div className="tags">
            <span>Cubilia</span>
            <span>Cubilia</span>
            <span>Cubilia</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectWeb;
