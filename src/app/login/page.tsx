export default function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white">
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="username"
          className="py-2 px-4 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="password"
          className="py-2 px-4 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Login</button>
      </form>
    </div>
  );
}
