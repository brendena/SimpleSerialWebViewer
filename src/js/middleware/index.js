
const handleSettings = (store) => (next) => (action) =>
{

    return next(action);
}

export {handleSettings};