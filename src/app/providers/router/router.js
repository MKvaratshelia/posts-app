import { createHashRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { PostPage } from '../../../pages/PostPage';

const router = createHashRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <div>Что-то пошло не так</div>,
    },
    {
        path: '/:id',
        element: <PostPage />,
    },
]);

export const AppRouter = ({ children }) => {
    return <RouterProvider router={router}>{children}</RouterProvider>;
};
