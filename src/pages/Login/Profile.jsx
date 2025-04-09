import React, { useEffect, useState } from "react";
import { auth } from "../../firebase"; // your firebase config file
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        navigate("/signin"); // Redirect if not logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  if (!user) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-lg">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="mb-4">
        <p className="text-gray-600">
          <strong>Name:</strong> {user.displayName || "Not provided"}
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-600">
          <strong>User ID:</strong> {user.uid}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
