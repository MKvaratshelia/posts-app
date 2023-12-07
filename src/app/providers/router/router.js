import { createHashRouter, RouterProvider } from 'react-router-dom';
import { MainPageAsync as MainPage } from '../../../pages/MainPage';
import { PostPageAsync as PostPage } from '../../../pages/PostPage';
import { Suspense } from 'react';
import { Loader } from '../../../shared';

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
    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={router}>{children}</RouterProvider>
        </Suspense>
    );
};
