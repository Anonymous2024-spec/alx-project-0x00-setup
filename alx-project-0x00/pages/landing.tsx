import Card from "@/components/card";
import Button from "@/components/Button";
import React from "react";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      
      {/* Small Buttons */}
      <Button title="Small - sm" className="text-sm rounded-sm" />
      <Button title="Small - md" className="text-sm rounded-md" />
      <Button title="Small - full" className="text-sm rounded-full" />

      {/* Medium Buttons */}
      <Button title="Medium - sm" className="text-base rounded-sm" />
      <Button title="Medium - md" className="text-base rounded-md" />
      <Button title="Medium - full" className="text-base rounded-full" />

      {/* Large Buttons */}
      <Button title="Large - sm" className="text-lg rounded-sm" />
      <Button title="Large - md" className="text-lg rounded-md" />
      <Button title="Large - full" className="text-lg rounded-full" />
    </div>
  );
};

export default Landing;
