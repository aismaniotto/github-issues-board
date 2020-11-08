const logout = () => {
  localStorage.clear();
  window.location.href = '/login';
};

export default logout;
