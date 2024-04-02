import React from "react";

const Page = ({title, component, current, total}) => (
  <div className="cutlines__page">{title} - {component} - página {current} de {total}</div>
);

export default Page;
