// app/settings/page.tsx

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Notification Preferences</h2>
        <div className="mb-2">
          <input type="checkbox" id="emailNotifications" name="emailNotifications" />
          <label htmlFor="emailNotifications" className="ml-2">Email Notifications</label>
        </div>
        <div>
          <input type="checkbox" id="smsNotifications" name="smsNotifications" />
          <label htmlFor="smsNotifications" className="ml-2">SMS Notifications</label>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Change Password</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block mb-1">Current Password:</label>
            <input type="password" id="currentPassword" name="currentPassword" className="border border-gray-300 px-4 py-2 rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-1">New Password:</label>
            <input type="password" id="newPassword" name="newPassword" className="border border-gray-300 px-4 py-2 rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="border border-gray-300 px-4 py-2 rounded w-full" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Change Password</button>
        </form>
      </div>
    </div>
  );
}
