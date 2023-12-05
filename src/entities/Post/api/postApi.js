import { rtkApi } from '../../../shared/api/rtkApi';

const postApi = rtkApi.injectEndpoints({
    // endpoints: (build) => ({
    //     getPosts: build.query({
    //         query: (limit) => ({
    //             url: '/posts',
    //             params: {
    //                 _limit: limit,
    //             },
    //         }),
    //     }),
    // }),
    endpoints: (build) => ({
        fetchAllPosts: build.query({
            query: (limit) => ({
                url: '/posts',
                params: {
                    _limit: limit,
                },
            }),
        }),
        fetchPostById: build.query({
            query: (id) => ({
                url: `/posts/${id}`,
            }),
        }),
    }),
});

// export const useGetPosts = postApi.useGetPostsQuery;

export const fetchAllPosts = postApi.useFetchAllPostsQuery;
export const fetchPostById = postApi.useFetchPostByIdQuery;
