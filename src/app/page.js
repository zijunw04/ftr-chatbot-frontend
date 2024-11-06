import Image from "next/image";
import Chatbot from "./components/chatbot";
import Header from "./components/header";


export default function Home() {
  return (
    <div className="w-screen max-w-[100%] min-h-screen">
      <Header />
      <Chatbot />
    </div>
  );
}
