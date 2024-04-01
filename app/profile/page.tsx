// app/profile/page.tsx

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mb-4">
        <p className="text-lg">Name: John Doe</p>
        <p className="text-lg">Email: john.doe@example.com</p>
        <p className="text-lg">Role: Administrator</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Edit Profile</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input type="text" id="name" name="name" className="border border-gray-300 px-4 py-2 rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" className="border border-gray-300 px-4 py-2 rounded w-full" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
