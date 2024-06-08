export const productionPath = 'test_task3';

export const paths = {
    api: process.env.NODE_ENV === 'production' ? `/${productionPath}/data` : 'data',
    basename: process.env.NODE_ENV === 'production' ? productionPath : '',
    index: '/'
};
