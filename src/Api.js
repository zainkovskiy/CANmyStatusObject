import axios from 'axios';


export const getOfficeList = async () => {
  return await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Statistic/Operating.php', {
    action: "get",
    userId: 2921
  })
}

export const getObjectList = async () => {
  return await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Charts/Server.php')
}