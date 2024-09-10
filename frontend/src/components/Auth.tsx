import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth, googleProvider } from "@/utils/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export const Auth = () => {
  const [alert, setAlert] = useState<{ open: boolean; type: string; message: string } | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      const username = response.user.email;

      // Ensure db is defined or imported properly for Firestore usage
      // const ref = await db.collection('usernames').doc(username).set({
      //   uid: response.user.uid,
      // });

      setAlert({
        open: true,
        type: 'success',
        message: 'Login successful',
      });

      // Redirect to /profile after login
      navigate('/profile');

    } catch (error) {
      setAlert({
        open: true,
        type: 'error',
        message: 'Google auth is not working',
      });
    }
  };

  const handleClose = () => {
    setAlert(null);
  };

  return (
    <div className="flex justify-center items-center h-screen max-w-screen-lg">
      <div className="flex flex-col gap-5 w-full max-w-md">
        <p className="text-2xl font-semibold mb-2 text-white text-center">
          Log In
        </p>
        <div className="flex flex-col justify-center items-center gap-3 bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="font-normal text-2xl text-gray-900">Welcome</div>
          <p className="font-light text-sm text-gray-600">
            Log in to continue to DailyCode.
          </p>
          <button
            className="w-full flex justify-center items-center gap-2 py-3 px-4 border rounded font-light text-md text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2"
            onClick={signInWithGoogle}
          >
            <div className="flex gap-2 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="w-5 h-5"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <p>Continue with Google</p>
            </div>
          </button>
        </div>
      </div>

      {/* Alert display logic */}
      {alert && alert.open && (
        <div
          className={`fixed bottom-5 right-5 p-4 rounded ${
            alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          <p>{alert.message}</p>
          <button onClick={handleClose} className="ml-4 font-bold">Close</button>
        </div>
      )}
    </div>
  );
};
