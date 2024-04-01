// app/logout/page.tsx

export default function LogoutPage() {
  // Perform logout logic here, such as clearing user session or token

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Logout</h1>
      <p className="mb-4">You have been successfully logged out.</p>
      <a href="/login" className="text-blue-500 hover:underline">Log in again</a>
    </div>
  );
}
