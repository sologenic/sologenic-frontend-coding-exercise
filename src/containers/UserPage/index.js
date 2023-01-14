import "./_index.scss";
import React from "react";
import { useDispatch } from "react-redux";

// Users Page
// You will need to fetch for a batch of 20 users
// Store the request response in the Redux store
// And then display them in this page.
// The setup for Sagas and Redux store is already set. Do not need to set this configuration.
// You just need to make use of the tools.
// Searching in Google or asking the interviewers is encouraged to resolve doubts or questions.

// Requisites:
// - Set a loading view if the users are not loaded yet.
// - All the styling must be mobile responsive.
// - Display the users, this are the elements needed to be displayed:
//   - Username, if the username property === address, that means there is no username... fallback to use the address
//   - Avatar, if the avatar property doesn't exist, empty, etc... fallback to a Image Placeholder (You can find it in the images folder)
//   - Verified, if the user is verified display the Verified badge image you will find on the Images folder

export default function UserPage(props) {
  const dispatch = useDispatch();

  return (
    <div className="UsersPage-container">
      <h3 className="UsersPage-title">Users</h3>
      <div className="UsersPage-users"></div>
    </div>
  );
}
