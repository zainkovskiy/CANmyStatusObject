import axios from 'axios';


export const getOfficeList = async () => {
  return await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Charts/Server.php', {
    action: "getStart",
    userId: userId
  })
}

export const getObjectList = async (raw) => {
  return await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Charts/Server.php', {
  ...raw,
  action: "get",
  })
}