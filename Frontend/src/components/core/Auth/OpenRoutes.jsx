
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const OpenRoutes = () => {

    const { token } = useSelector((state) => state.auth);

    return token ? <Navigate to="/" /> : <Outlet />
}

export default OpenRoutes