import React, { useEffect } from "react";
import actions from "../../actions";

// This is your first task,
// You will need to fetch for a batch of 20 users
// Store the request response in the Redux store
// And then display them in this page.
// You need to use the Hooks: useDispatch and useSelector
// Requisites to display:
// Username, if the username property === address, that means there is no username... fallback to use the address
// Avatar, if the avatar property doesn't exist, empty, etc... fallback to a Image Placeholder (You can find it in the images folder)
// Verified, if the user is verified display the Verified badge image you will find on the Images folder
// Set a loading view if the users are not loaded yet.

export default function UserPage(props) {
  return <div className="UserPage-container"></div>;
}
