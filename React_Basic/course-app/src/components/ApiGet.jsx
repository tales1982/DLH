import { useEffect, useState } from "react";
import { H1, P, Button, Div } from "../styles/ApiGetStyles";

function ApiGet() {
  const [joke, setJoke] = useState("Bientot, ici ma blague");

  const generateJoke = async () => {
    setJoke("Waiting...");
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setJoke(data.value);
    } catch (error){
      setJoke("Connection failed...");
      console.error(error);
    }
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <Div>
      <H1>Api Get Chuck Norris</H1>
      <Button onClick={generateJoke}>Get a joke</Button>
      <P>{joke}</P>
    </Div>
  );
}

export default ApiGet;
