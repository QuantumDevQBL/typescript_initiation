import { useEffect } from "react";
import play from "../playground";
import test from "../test";

export default function Home() {
 useEffect(() => {
   play();
   test();
 }, []);


  return <div>Hello world</div>;
}
