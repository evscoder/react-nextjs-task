export const productionPath = '';

export const paths = {
    api: process.env.NODE_ENV === 'production' ? `data` : 'data',
    basename: process.env.NODE_ENV === 'production' ? '' : '',
    index: '/'
};
