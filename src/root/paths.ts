export const productionPath = 'test-task3-ivory.vercel.app';

export const paths = {
    api: process.env.NODE_ENV === 'production' ? `/${productionPath}/data` : 'data',
    basename: process.env.NODE_ENV === 'production' ? productionPath : '',
    index: '/'
};
