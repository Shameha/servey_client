// import React from 'react';

import { useLoaderData } from "react-router-dom";

const VotePage = () => {
  const survey = useLoaderData();
  const{title,description} = survey
    return (
        <div>
          <h1>votaing page:{title}</h1>         
          <h1>votaing page:{description}</h1>         
        </div>
    );
};

export default VotePage;