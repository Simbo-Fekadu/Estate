import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      // Initialize GoogleAuthProvider and Auth
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // Sign in with Google popup
      const result = await signInWithPopup(auth, provider);

      // Extract user data from the result
      const { displayName, email, photoURL } = result.user;

      // Send user data to your backend for further processing
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: displayName,
          email: email,
          photo: photoURL,
        }),
      });

      // Assuming your backend responds with user data, dispatch signInSuccess action
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      // Log any errors that occur during the sign-in process
      console.error("Could not sign in with Google", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
