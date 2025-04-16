import Link from "next/link";
import React from "react";

const MenuItem = ({ mn }) => {
  return (
    <div className="hover:text-blue-800" >
      <Link href={mn.url}>{mn.name}</Link>
    </div>
  );
};

export default MenuItem;
