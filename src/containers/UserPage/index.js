import "./_index.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";
import VerifiedBadgeSVG from "../../images/verified_badge.svg";
import AvatarPlaceholderSVG from "../../images/avatar_placeholder.svg";

// Users Page
// You will need to fetch for a batch of 20 users
// You will need to finish the callback function of the fetchUsersSaga on sagas/user.js
// Store the request response in the Redux store
// Access the store on this component and display the users following the design provided on the Requisites section.

// Note:
// The setup for Sagas and Redux store is already set. Do not need to set this configuration. You just need to make use of the tools.
// Searching in Google or asking the interviewers is encouraged to resolve doubts or questions.

// Requisites:
//
// Design link: https://www.figma.com/file/XpkAhZv2LcIqiHAEPY5fxa/UI_Test?node-id=1%3A19&t=ZDCi2KXlCRczKI5F-1
//
// - Set a loading view if the users are not loaded yet.
// - Follow the design provided to display the users.
// - These are the elements of each user that need to be displayed:
//   - Username, if the username property === address property, that means there is no username... fallback to use the address property
//   - Avatar, if the avatar property doesn't exist, empty, etc... fallback to a Image Placeholder (You can find it already imported in this file)
//   - Verified, if the user is verified display the Verified badge image, you will find it already imported in this file

// Hints:
// - Some of the things you will need to finish the exercise are already imported, you will need to import some other ones.

// Bonus
// - All the styling must be mobile responsive.
// - Add a highlight state whenever a user is clicked and/or hovered on.
// - When a user is clicked, add a section where the data of said user is displayed.
//   The design and position of the Displayed User is up to you, but must be mobile responsive.

export default function UserPage(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(actions.fetchUsers());
  }, []);

  return (
    <div className="UsersPage-container">
      <h3 className="UsersPage-title">Users</h3>
      <div className="UsersPage-users"></div>
    </div>
  );
}
