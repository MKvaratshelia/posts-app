import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { PostPage } from '../../../pages/PostPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/:id',
        element: <PostPage />,
    },
]);

export const AppRouter = ({ children }) => {
    return <RouterProvider router={router}>{children}</RouterProvider>;
};
