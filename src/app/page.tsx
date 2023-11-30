"use client";
import {
  SunIcon,
  ExclamationTriangleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
// import { Alert, Button } from "iron-components-ui";
// import Header from "./componwnts/header";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h2 className="text-5xl font-bold mb-20">ChatGPT</h2>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-6 w-6 text-white-500" />
            <h2>Example</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">hey</p>
            <p className="infoText">hey</p>
            <p className="infoText">hey</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-6 w-6 text-white-500" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">hey</p>
            <p className="infoText">hey</p>
            <p className="infoText">hey</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6 text-white-500" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">hey</p>
            <p className="infoText">hey</p>
            <p className="infoText">hey</p>
          </div>
        </div>
      </div>
    </div>
  );
}
