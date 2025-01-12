

const Login = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-gradient-to-b from-teal-600 
                         from-50% to-gray-100 to-50% space-y-6">
      <h2 className="font-mono text-3xl text-white">CHAT-X</h2>
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder='Enter Email'
              className="w-full px-3 py-2 border"

            />

          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder='*******'
              className="w-full px-3 py-2 border"

            />

          </div>
          <div className="mb-4 flex items-center justify-center">
            <label className="flex  items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <a href="#" className="text-teal-600 ml-2">
              Forgot password?
            </a>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 bg-teal-600 text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login