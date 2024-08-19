

const getClients = (req, res) => {
  return res.json({
    ok: true,
    message: "getClients",
  });
};

const getPartidos = (req, res) => {

  const { name } = req.body  
  

  return res.json({
    ok: true,
    message: "getPartidos",
  });
};

module.exports = {
  getClients,
  getPartidos
};
