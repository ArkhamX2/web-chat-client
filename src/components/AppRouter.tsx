
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';


const AppRouter = () => {
    const { isLoggedIn } = useTypedSelector(state => state.auth)

    return (
        isLoggedIn
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        Component={route.element}
                        path={route.path}
                        key={route.path} />
                )}
                <Route path="*" element={<Navigate to="/rooms" replace/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        Component={route.element}
                        path={route.path}
                        key={route.path} />
                )}
                <Route path="*" element={<Navigate to="/login" replace/>}/>
            </Routes>
    )
}

export default AppRouter