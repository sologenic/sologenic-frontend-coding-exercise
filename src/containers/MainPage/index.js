import "./_index.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MainPage(props) {
  return (
    <div className="MainPage-container">
      <h1>Welcome to the Sologenic Coding Exercise.</h1>
      <p>
        In this exercise you will perform tasks that resemble the day-to-day
        duties of a Front-end Developer at Sologenic.
        <br />
        This repo was built to the mimic the actual Front-end repository of our
        platform{" "}
        <a href="https://sologenic.org" target="_blank">
          Sologenic DEX & NFT
        </a>
      </p>
      <p>You are going to be using tools like:</p>
      <ul>
        <li>CSS (Scss)</li>
        <li>Hooks</li>
        <li>Reducers (Redux)</li>
        <li>Sagas</li>
        <li>API Calls</li>
        <li>...amont others</li>
      </ul>
      <p>
        If you have any question, or got stuck at some point; please let us
        know.
      </p>
      <p>
        We want you to succeed as a team member of Sologenic, and that means to
        be independent but knowing when to ask for help.
        <br />
        Reliability over Experience: Knowing everything is impossible,
        Delivering everything is not. <br />
        We want to know that we can rely on you, knowledge can be acquired on
        the way.
      </p>

      <h3>Go to the file UserPage/index.js to start with the exercise.</h3>
    </div>
  );
}
