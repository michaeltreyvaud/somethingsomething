//  TODO: unique storage identifers based on company
const AuthStore = {
  getAccessToken: () => {
    const storage = localStorage || sessionStorage;
    return storage.getItem('TODOAccessToken');
  },
  setAccessToken: (token) => {
    const storage = localStorage || sessionStorage;
    return storage.setItem('TODOAccessToken', token);
  },
  removeAccessToken: () => {
    const storage = localStorage || sessionStorage;
    return storage.removeItem('TODOAccessToken');
  },
  getIdToken: () => {
    const storage = localStorage || sessionStorage;
    return storage.getItem('TODOIdToken');
  },
  setIdToken: (token) => {
    const storage = localStorage || sessionStorage;
    return storage.setItem('TODOIdToken', token);
  },
  removeIdToken: () => {
    const storage = localStorage || sessionStorage;
    return storage.removeItem('TODOIdToken');
  },
  getRefreshToken: () => {
    const storage = localStorage || sessionStorage;
    return storage.getItem('TODORefreshToken');
  },
  setRefreshToken: (token) => {
    const storage = localStorage || sessionStorage;
    return storage.setItem('TODORefreshToken', token);
  },
  removeRefreshToken: () => {
    const storage = localStorage || sessionStorage;
    return storage.removeItem('TODORefreshToken');
  },
};

export default AuthStore;
