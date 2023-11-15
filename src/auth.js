export const isAuthenticated = () => {
    const token = localStorage.getItem('token'); // Assumindo que você armazena o token JWT no localStorage
    // Verificar se o token existe e não está expirado
    return token && !isTokenExpired(token);
  };
  
  // Função para verificar se o token está expirado
  export const isTokenExpired = (token) => {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
  };
  
  // Função para obter a data de expiração do token
  export const getTokenExpirationDate = (token) => {
    const decoded = decodeToken(token);
    if (!decoded.exp) return null;
    return new Date(decoded.exp * 1000); // Convertendo de segundos para milissegundos
  };
  
  // Função para decodificar o token JWT
  export const decodeToken = (token) => {
    return JSON.parse(atob(token.split('.')[1]));
  };